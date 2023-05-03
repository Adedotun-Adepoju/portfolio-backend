import { Module } from '@nestjs/common';
import { PortfolioController } from './portfolio.controller';
import { Portfolio } from './portfolio';

@Module({
  controllers: [PortfolioController],
  providers: [Portfolio]
})
export class PortfolioModule {}
