import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
    constructor(private powerService: PowerService) { }
    
    getData() {
        console.log('Using 20MHz of power from Power service');
        this.powerService.supplyPower(20);
        return 'Data!';
    }
}
