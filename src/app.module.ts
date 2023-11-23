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
        type: 'mysql',
        host: 'sql5.freemysqlhosting.net',
        port: 3306,
        username: 'sql5664448',
        password: 'TE4QX8vzDe',
        database: 'sql5664448',
        entities: [User],
        synchronize: true,
      }),
      AuthModule,
    ],
})
export class AppModule {}