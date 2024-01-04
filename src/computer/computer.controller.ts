import { Controller, Get } from '@nestjs/common';

@Controller('computer')
export class ComputerController {
  @Get()
  getComputer() {
    return 'This is a computer';
  }
}
