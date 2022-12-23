import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CustomersEntity } from './models/customers.entity';
import { Customers } from './models/customers.interface';
import { CustomersModel } from './models/customers.model';

@Injectable()
export class CustomersService {
    constructor (
        @InjectRepository(CustomersEntity)
        private readonly customersRepository: Repository<CustomersEntity>
    ) {}

    addCustomers(customersModel: CustomersModel): Observable<CustomersEntity> {

        console.log("customersModel add",customersModel);
      
        let tempData:CustomersEntity = new CustomersEntity();

        tempData.name = customersModel.name;
        tempData.email = customersModel.email;
        tempData.dob = customersModel.dob;
        tempData.gender = customersModel.gender;
        tempData.address = customersModel.address;
        tempData.rating = customersModel.rating;
        tempData.password = customersModel.password;
        tempData.confirmPassword = customersModel.confirmPassword;

        let tempStore = tempData;
        console.log('tempStore',tempStore);
        
        
        return from (this.customersRepository.save(tempStore));
       
        //  this.bookRepository.save(tempStore).then(res => {
        //     bookID = res.book_id;
        //     throw1();
        //  }); 
         
            // return;
            // this.bookCatRepository.save()   
        
    }

    findAllCustomers(): Observable<Customers[]> {
        return from(this.customersRepository.find());
    }

    getSpecificByEmail(email: string): Observable<Customers> {
        // const book_name = name;
        return from(this.customersRepository.findOneBy({ email }));
    }

    updateCustomerById(customerId: number, customersModel: CustomersModel): Observable<UpdateResult> {
        return from(this.customersRepository.update(customerId, customersModel));
    }

    updateCustomerByEmail(email: string, customersModel: CustomersModel): Observable<UpdateResult> {
        return from(this.customersRepository.update(email, customersModel));
    }

    deleteCustomerId(customerId: number): Observable<DeleteResult> {
        return from(this.customersRepository.delete(customerId));
      }
}
