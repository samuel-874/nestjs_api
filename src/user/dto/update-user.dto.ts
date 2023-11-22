import { IsString, IsEmail, Length } from "class-validator"

export class UpdateUserDTO{

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @Length(6)
    password: string;
    
}

