import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator"

export class CreateUserDto {
    @IsNumber()
    id: number

    @IsString({ message: 'Name must be a string' })
    @IsNotEmpty({ message: 'Name should not be empty' })
    @MinLength(3, { message: 'Name must be at least 3 characters' })
    name: string

    @IsEmail()
    @MinLength(3, { message: 'Email must be at least 3 characters' })
    email: string


    @IsString()
    @IsOptional()
    gender?: string

    @IsBoolean()
    isMarid: boolean
}