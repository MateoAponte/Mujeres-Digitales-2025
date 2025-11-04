import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerDocumentation } from './common/helpers/swaggerDocumentation';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
  }));

  // Clase, cada función modifica un atributo y retorna su misma clase

  /**
    class DocumentBuilder {
      setTitle(title: string) {
        this.title = title;
        return this;
      }
    }
  */

  // Swagger deja de funcar, depreca -> Desligue Swagger de su funcionalidad dentro de mi App
  const documentation = new SwaggerDocumentation(app);
  documentation.build();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
