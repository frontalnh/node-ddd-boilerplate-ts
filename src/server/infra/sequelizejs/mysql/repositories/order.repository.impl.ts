import { Filter } from '@common/models/QueryOption';
import { Order } from '@domain/order/order.model';
import { removeDotInJson } from '@frontalnh/json-dot-parser';
import { DestroyOptions, UpdateOptions } from 'sequelize';
import { ICountOptions } from 'sequelize-typescript';

export class OrderRepositoryImpl {
  constructor() {}

  public async save(order: Order) {
    return order.save();
  }

  public async findAll(filter: Filter) {
    if (!filter.raw) return Order.findAll(filter);

    let datas = await Order.findAll(filter);
    for (let data of datas) {
      Object.assign(data, removeDotInJson(data));
    }

    return datas;
  }

  public async findById(id: number) {
    return Order.findByPrimary(id);
  }

  public async getCount(filter: ICountOptions<Order>) {
    return Order.count(filter);
  }

  public async update(order: Partial<Order>, option: UpdateOptions): Promise<[number, Order[]]> {
    return Order.update(order, option);
  }

  public async delete(option: DestroyOptions): Promise<number> {
    return Order.destroy(option);
  }
}
