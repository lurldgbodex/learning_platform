import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator'
import { Transform } from 'class-transformer'

export class RegisterDto {
  @IsEmail()
  @Transform(({ value }) => (typeof value == 'string' ? value.trim() : value))
  @ApiProperty({ example: 'user@example.com', description: 'User email ' })
  email: string

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Transform(({ value }) => (typeof value == 'string' ? value.trim() : value))
  @ApiProperty({ example: 'securepassword123', description: 'User password' })
  password: string
}
