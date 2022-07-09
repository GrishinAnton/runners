import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  

  // const config = new DocumentBuilder()
  //   .addBearerAuth()
  //   .setTitle('Сервис нотофикаций')
  //   .setVersion('1.0.0')
  //   .build();

  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('/api', app, document);
  await app.listen(PORT);
}
bootstrap();
