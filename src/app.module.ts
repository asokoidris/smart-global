import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from 'config';
import { AllExceptionFilter } from './httpExceptionFilter';
import { UsersModule } from './users/users.module';

// Log to check if the config is properly loaded
console.log(config.get('mongodb.url'));

@Module({
  imports: [
    MongooseModule.forRoot(config.get('mongodb.url'),
      {

      w: 1,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: "APP_FILTER",
    useClass: AllExceptionFilter,
    },
  ],
})
export class AppModule {}
