import { type } from "os";
import { Observable } from "rxjs";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Generated } from "typeorm/decorator/Generated";
import { Unique } from "typeorm/decorator/Unique";

@Entity('customers-1121')
export class CustomersEntity {
    // @Column()
    @PrimaryGeneratedColumn()
    // @Generated('increment')
    customerId: number;

    @Column()
    // @IsNotEmpty()
    // @IsString()
    name: string;

    // @PrimaryGeneratedColumn()
    @Column()
    // @Unique()
    // @IsInt()
    email: string;

    @Column()
    // @IsNotEmpty()
    // @IsString()
    dob: string;
   
    @Column()
    // @IsNotEmpty()
    gender: string;

    @Column()
    // @IsNotEmpty()
    // @IsInt()
    address: string;

    @Column()
    // @IsNotEmpty()
    // @IsString()
    rating: number;

    @Column()
    // @IsNotEmpty()
    // @IsString()
    password: string;
   
    @Column()
    // @IsNotEmpty()
    // @IsString()
    confirmPassword: string;
}