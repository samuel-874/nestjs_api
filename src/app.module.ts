import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { UserModule } from './user/user.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user/entity/user.entity";
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from "./profile/profile.module";

const dotenv = require('dotenv');
dotenv.config()


@Module({
    controllers: [AppController],
    imports: [
      UserModule,
      ProfileModule,
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [User],
        synchronize: false,
      }),
      AuthModule,
    ],
})
export class AppModule {}