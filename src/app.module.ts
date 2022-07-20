import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { configService } from './config/config.service';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    UserModule,
  ],
})
export class AppModule {}
