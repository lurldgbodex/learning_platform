import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import * as bcrypt from 'bcryptjs'
import { User } from './entities/user.entity'
import { Repository } from 'typeorm'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'
import { JwtService } from '@nestjs/jwt'
import { UserDto } from './dto/user.dto'
import { AuthResponse } from './dto/auth-response.dto'
import { RefreshTokenDto } from './dto/refresh-token.dto'
import { jwtConstants } from './utils/constants'
import { TokenPayload } from './dto/token-payload.dto'

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto): Promise<AuthResponse> {
    const { email, password } = registerDto

    const existingUser = await this.userRepository.findOne({ where: { email } })

    if (existingUser) {
      throw new ConflictException('Email already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = this.userRepository.create({
      email,
      password: hashedPassword,
    })

    const savedUser = await this.userRepository.save(user)

    const tokens = await this.generateToken({ 
      email: savedUser.email, 
      sub: savedUser.id, 
      role: savedUser.role 
    });

    savedUser.refreshToken = tokens.refresh_token;

    await this.userRepository.save(savedUser);
    return tokens;
  }

  async login(loginDto: LoginDto): Promise<AuthResponse> {
    const { email, password } = loginDto
    const user = await this.userRepository.findOne({ where: { email } })

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials')
    }
    const payload = { email: user.email, sub: user.id, role: user.role }
    const tokens = await this.generateToken(payload)

    user.refreshToken = tokens.refresh_token
    await this.userRepository.save(user)

    return tokens
  }

  async refreshToken(refreshTokenDto: RefreshTokenDto): Promise<AuthResponse> {
    const refreshToken = refreshTokenDto.refresh_token
    const user = await this.userRepository.findOne({ where: { refreshToken } })

    if (!user) {
      throw new UnauthorizedException('Invalid refresh token')
    }

    try {
      const payload: TokenPayload = await this.jwtService.verifyAsync(
        refreshToken,
        {
          secret: jwtConstants.refreshSecret,
        },
      )
      const newPayload = {
        email: user.email,
        sub: payload.sub,
        role: payload.role,
      }

      const tokens = await this.generateToken(newPayload)

      user.refreshToken = tokens.refresh_token
      await this.userRepository.save(user)

      return tokens
    } catch {
      throw new UnauthorizedException('Invalid or expired refresh token')
    }
  }

  async logout(userId: string): Promise<void> {
    await this.userRepository.update(userId, { refreshToken: null })
  }

  private async generateToken(payload: TokenPayload): Promise<AuthResponse> {
    const accessToken = await this.jwtService.signAsync(payload, {
      secret: jwtConstants.secret,
      expiresIn: '1h',
    })
    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: jwtConstants.refreshSecret,
      expiresIn: '7d',
    })

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    }
  }
}
