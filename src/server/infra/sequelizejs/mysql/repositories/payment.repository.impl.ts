import { Filter } from '@common/models/QueryOption';
import { Payment } from '@domain/payment/payment.model';
import { removeDotInJson } from '@frontalnh/json-dot-parser';
import { DestroyOptions, UpdateOptions } from 'sequelize';
import { ICountOptions } from 'sequelize-typescript';

export class PaymentRepositoryImpl {
  constructor() {}

  public async save(payment: Payment) {
    return payment.save();
  }

  public async findAll(filter: Filter) {
    if (!filter.raw) return Payment.findAll(filter);

    let datas = await Payment.findAll(filter);
    for (let data of datas) {
      Object.assign(data, removeDotInJson(data));
    }

    return datas;
  }

  public async findById(id: number) {
    return Payment.findByPrimary(id);
  }

  public async getCount(filter: ICountOptions<Payment>) {
    return Payment.count(filter);
  }

  public async update(payment: Partial<Payment>, option: UpdateOptions): Promise<[number, Payment[]]> {
    return Payment.update(payment, option);
  }

  public async delete(option: DestroyOptions): Promise<number> {
    return Payment.destroy(option);
  }
}
