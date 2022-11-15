import { DatasService } from './datas.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  providers: [DatasService],
})
export class DatasModule {}
