import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      // host works as 'db' because of the docker network we created
      host: 'db',
      database: 'dev',
      username: 'root',
      password: 'password',
      port: 5432,
      entities: [User],
      synchronize: true,
      logging: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
