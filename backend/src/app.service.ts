import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getExcel(): string {
    return '/name_js.xlsx';
  }
}
