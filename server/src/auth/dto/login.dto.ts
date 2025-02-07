import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
    @IsNotEmpty()
    @ApiProperty({example: 'user@example.com', description: 'User email '})
    email: string;

    @IsNotEmpty()
    @ApiProperty({ example: 'securepassword123', description: 'User password' })
    password: string;
}