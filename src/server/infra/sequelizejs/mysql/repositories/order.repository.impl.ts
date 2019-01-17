
  import { Order } from '@domain/order/order.model';
  import { DestroyOptions, UpdateOptions } from 'sequelize';
  import { Filter } from '@common/models/QueryOption';
  import { ICountOptions } from 'sequelize-typescript';
  import { removeDotInJson } from '@frontalnh/json-dot-parser';

  export class OrderRepositoryImpl {
    constructor() {}
  
    async save(order: Order) {
      return await order.save();
    }
  
    async findAll(filter: Filter) {
      if (!filter.raw) return await Order.findAll(filter);

      let datas = await Order.findAll(filter);
      for (let data of datas) {
        Object.assign(data, removeDotInJson(data));
      }
  
      return datas;
    }
  
    async findById(id: number) {
      return await Order.findByPrimary(id);
    }

    async getCount(filter: ICountOptions<Order>) {
      return await Order.count(filter);
    }
  
    async update(
      order: Partial<Order>,
      option: UpdateOptions
    ): Promise<[number, Order[]]> {
      return await Order.update(order, option);
    }
  
    async delete(option: DestroyOptions): Promise<number> {
      return await Order.destroy(option);
    }
  }
  