import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UpdateUserDTO } from './dto/update-user.dto';
import { CreateUserDTO } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

    constructor(

        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}

    get(): Promise<User[]>{
        return this.userRepository.find();
    }

    create(createUserDTO: CreateUserDTO){
        return this.userRepository.save(createUserDTO);
    }

    update(body: UpdateUserDTO, user: number){
        return this.userRepository.update(user,body);
    }

    delete(user: number){
        return this.userRepository.delete(user);
    }

    show(user: number): Promise<User>{
        return this.userRepository.findOne({
            where: {id: user}
        })
    }
    
    findByEmail(email: string): Promise<User>{
        return this.userRepository.findOne({
            where: {email: email}
        })
    }

}
