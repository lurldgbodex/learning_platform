import { ApiProperty } from "@nestjs/swagger";
import { UserRole } from "../enums/user-role.enum";
import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";
import { Transform } from "class-transformer";

export class RegisterDto {
    @IsEmail()
    @Transform(({ value }) => value.trim())
    @ApiProperty({example: 'user@example.com', description: 'User email '})
    email: string;

    @IsString()
    @MinLength(8)
    @MaxLength(32)
    @Transform(({ value }) => value.trim())
    @ApiProperty({ example: 'securepassword123', description: 'User password' })
    password: string;
}