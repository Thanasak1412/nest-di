import * as os from 'os';
import { PowerService } from 'src/power/power.service';

import { Injectable } from '@nestjs/common';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute() {
    this.powerService.supplyPower(40);

    const [myCpu] = os.cpus();

    return `My platform/CPU information is ${myCpu.model} speed: ${myCpu.speed}`;
  }
}
