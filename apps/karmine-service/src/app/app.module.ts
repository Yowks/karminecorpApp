import { DatasModule } from './datas/datas.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
