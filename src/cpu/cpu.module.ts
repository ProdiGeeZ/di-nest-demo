import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  imports :[PowerModule],
  providers: [CpuService], // this service is private unless exported
  exports: [CpuService] //allows access from other modules
})
export class CpuModule {}
