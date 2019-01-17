import { Order } from '@domain/order/order.model';
  import { UpdateOption, Filter } from '@common/models/QueryOption';
  import { DestroyOptions } from 'sequelize';
  import { ICountOptions } from 'sequelize-typescript';

  export interface OrderRepository {
    save(order: Order): Promise<Order>;
    findAll(filter: Filter): Promise<Order[]>;
    findById(id: number): Promise<Order>;
    getCount(filter: ICountOptions<Order>): Promise<number>;
    update(
      order: Partial<Order>,
      option: UpdateOption<Order>
    ): Promise<[number, Order[]]>;
    delete(option: DestroyOptions): Promise<number>;
  }
  