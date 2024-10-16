import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
    constructor(private powerService: PowerService) { }
    
    compute(a: number, b: number) {
        console.log('Using 10MHz of power from Power service');
        this.powerService.supplyPower(10);
        return a + b;
    }
}
