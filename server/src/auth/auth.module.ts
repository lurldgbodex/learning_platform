import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from './utils/constants'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.refreshSecret,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
