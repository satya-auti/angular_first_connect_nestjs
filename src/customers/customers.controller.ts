import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CustomersService } from './customers.service';
import { CustomersEntity } from './models/customers.entity';
import { Customers } from './models/customers.interface';
import { CustomersModel } from './models/customers.model';

@Controller('customers')
export class CustomersController {
    constructor(private customersService: CustomersService){

    }

    @Post('register')
    add(@Body() customersModel: CustomersModel): Observable<CustomersEntity> {
        console.log('customer',customersModel);
        
        return this.customersService.addCustomers(customersModel);
      
    }

    @Get("/all")
    findAllCustomers(): Observable<Customers[]> {
        console.log("function called 1");
        return this.customersService.findAllCustomers();
    }

    @Get('find/:email')
    getSpecificByEmail(@Param('email') email: string): Observable<Customers> {
        return this.customersService.getSpecificByEmail(email);
    }

    @Patch('updateId/:customerId')
    updateCustomerById( @Param('customerId') customerId: number, @Body() customersModel: CustomersModel): Observable<UpdateResult> {
        return this.customersService.updateCustomerById(customerId, customersModel);
    }
    @Patch('updateEmail/:email')
    updateCustomerByEmail( @Param('email') email: string, @Body() customersModel: CustomersModel): Observable<UpdateResult> {
        return this.customersService.updateCustomerByEmail(email, customersModel);
    }

    @Delete('delete/:id')
    delete(@Param('customerId') customerId: number): Observable<DeleteResult> {
      return this.customersService.deleteCustomerId(customerId);
    }
}

