import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  HealthCheck(): string {
    return 'Smart Digital Server is running !';
  }
}
