import { Payment } from '@domain/payment/payment.model';
  import { UpdateOption, Filter } from '@common/models/QueryOption';
  import { DestroyOptions } from 'sequelize';
  import { ICountOptions } from 'sequelize-typescript';

  export interface PaymentRepository {
    save(payment: Payment): Promise<Payment>;
    findAll(filter: Filter): Promise<Payment[]>;
    findById(id: number): Promise<Payment>;
    getCount(filter: ICountOptions<Payment>): Promise<number>;
    update(
      payment: Partial<Payment>,
      option: UpdateOption<Payment>
    ): Promise<[number, Payment[]]>;
    delete(option: DestroyOptions): Promise<number>;
  }
  