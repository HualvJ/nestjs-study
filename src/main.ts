import { NestFactory } from '@nestjs/core';
import { WebhookModule } from './webhook/webhook.module';
import { ValidationPipe } from '@nestjs/common';

async function webhook() {
  const app = await NestFactory.create(WebhookModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // whitelist: true,
      transform: true,
    }),
  );
  await app.listen(8071);
}

(async () => webhook())();
