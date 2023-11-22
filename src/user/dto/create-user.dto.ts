
import { IsString, IsEmail,Length } from "class-validator";


export class CreateUserDTO {

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @Length(6)
    @IsString()
    password: string;

}