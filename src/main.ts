import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { TransformInterceptor } from './interceptors/transformer';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Had to comment out the createMicroservice because it wasn't generating the graphql, not sure how to get this working that way...
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport: Transport.TCP,
  //     options: {
  //       host: '127.0.0.1',
  //       port: 5000,
  //     },
  //   },
  // );
  app.useGlobalInterceptors(new TransformInterceptor());

  await app.listen(5000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
