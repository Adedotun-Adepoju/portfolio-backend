import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PortfolioModule } from './modules/portfolio/portfolio.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    PortfolioModule
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
