import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { DriversModule } from './drivers/driver.module';

@Module({
  imports: [
    ConfigModule.forRoot(), //allow read .env
    NewsModule,
    DriversModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
