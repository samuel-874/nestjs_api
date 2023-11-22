import { 
    Controller,
    Get, 
    Post, 
    Put,
    Req, 
    Param, 
    Delete ,
    Body
  } from "@nestjs/common";
import { Request } from "express";
import { ParseIntPipe } from "@nestjs/common"
import { UserService } from "./user.service";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { CreateUserDTO } from "./dto/create-user.dto";

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    
    @Get()
    getUsers(){
        return this.userService.get();
    }

    @Get('/:user')
    getUser( @Param('user') params: number){
        return this.userService.show(params);
    }

    
    @Post()
    store(@Body() userDTO: CreateUserDTO){
        return this.userService.create(userDTO);
    }
    
    @Put('/:user')
    updateUser(
        @Body() body: UpdateUserDTO,
        @Param('user') user: number,
    ){
        return this.userService.update(body,user)
    }


    @Delete('/:user')
    deleteUser(@Param('user') user: number){
        return this.userService.delete(user)
    }
}
