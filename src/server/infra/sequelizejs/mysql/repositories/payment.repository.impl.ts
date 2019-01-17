
  import { Payment } from '@domain/payment/payment.model';
  import { DestroyOptions, UpdateOptions } from 'sequelize';
  import { Filter } from '@common/models/QueryOption';
  import { ICountOptions } from 'sequelize-typescript';
  import { removeDotInJson } from '@frontalnh/json-dot-parser';

  export class PaymentRepositoryImpl {
    constructor() {}
  
    async save(payment: Payment) {
      return await payment.save();
    }
  
    async findAll(filter: Filter) {
      if (!filter.raw) return await Payment.findAll(filter);

      let datas = await Payment.findAll(filter);
      for (let data of datas) {
        Object.assign(data, removeDotInJson(data));
      }
  
      return datas;
    }
  
    async findById(id: number) {
      return await Payment.findByPrimary(id);
    }

    async getCount(filter: ICountOptions<Payment>) {
      return await Payment.count(filter);
    }
  
    async update(
      payment: Partial<Payment>,
      option: UpdateOptions
    ): Promise<[number, Payment[]]> {
      return await Payment.update(payment, option);
    }
  
    async delete(option: DestroyOptions): Promise<number> {
      return await Payment.destroy(option);
    }
  }
  