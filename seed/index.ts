import { NestFactory } from '@nestjs/core';
import {AppModule} from "./module/app.module"
async function bootstrap() {
    NestFactory.createApplicationContext(AppModule)
}
bootstrap();