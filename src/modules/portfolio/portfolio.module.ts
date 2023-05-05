import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Experience } from 'src/entities/experiences.entity';
import { Project } from 'src/entities/projects.entity';
import { PortfolioController } from './portfolio.controller';
import { PortfolioService } from './portfolio.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Project, Experience])
  ],
  controllers: [PortfolioController],
  providers: [PortfolioService]
})
export class PortfolioModule {}
