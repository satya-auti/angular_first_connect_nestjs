import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { CustomersEntity } from './models/customers.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([CustomersEntity])
  ],
  providers: [CustomersService],
  controllers:[CustomersController]
})
export class CustomersModule {}
