import { Body, Controller, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { AuthGuard } from './guards/auth.guard';

@ApiTags('Auth')
@Controller('api/v1/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'create a new user' })
    @ApiResponse({ status: 201, description: 'User created'})
    @ApiResponse({ status: 400, description: 'Misssing required request data' })
    async register(@Body() registerDto: RegisterDto) {
        return this.authService.register(registerDto);
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Log in a user'})
    @ApiResponse({ status: 200, description: 'login successful' })
    @ApiResponse({ status: 400, description: 'missing required data' })
    @ApiResponse({ status: 401, description: 'invalid credentials' })
    async login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }

    @Post('refresh-token')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Refresh access token '})
    @ApiResponse({ status: 200, description: "Token refreshed" })
    @ApiResponse({ status: 400, description: 'missing required data' })
    @ApiResponse({ status: 401, description: "Invalid refresh token "})
    async refreshToken(@Body() refreshTokenDto: RefreshTokenDto) {
        return this.authService.refreshToken(refreshTokenDto);
    }

    @Post('logout')
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Logout logged in user'})
    @ApiResponse({ status: 200, description: "Logout successful" })
    @ApiResponse({ status: 401, description: 'User not logged in' })
    async logout(@Req() req) {
        const userId = req.user.sub;
        return this.authService.logout(userId);
    }
}
