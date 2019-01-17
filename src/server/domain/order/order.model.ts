import {
  Table,
  PrimaryKey,
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  CreatedAt,
  UpdatedAt
} from 'sequelize-typescript';
import { User } from '@domain/user/user.model';

export enum OrderStatus {
  WAIT = 'WAIT',
  COMPLETE = 'COMPLETE'
}

@Table({ modelName: 'order', underscored: true })
export class Order extends Model<Order> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: Number;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: Number;

  @Column({
    type: DataType.ENUM({ values: Object.keys(OrderStatus) }),
    comment: '주문의 상태'
  })
  status?: OrderStatus;

  @Column({
    type: DataType.INTEGER,
    comment: '실제 고객이 구매한 금액'
  })
  price: Number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
