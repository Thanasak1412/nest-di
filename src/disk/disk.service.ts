import * as os from 'os';
import { PowerService } from 'src/power/power.service';

import { Injectable } from '@nestjs/common';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData() {
    this.powerService.supplyPower(20);

    const freeMemory = os.freemem();

    return `Free memory available on the system: ${freeMemory}`;
  }
}
