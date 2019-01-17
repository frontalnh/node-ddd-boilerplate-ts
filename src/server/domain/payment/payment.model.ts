import {
  Table,
  DataType,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  DefaultScope,
  BelongsTo
} from 'sequelize-typescript';
import { User } from '@domain/user/user.model';
import { Order } from '@domain/order/order.model';

export enum PaymentStatus {
  PENDING = 'PENDING',
  COMPLETE = 'COMPLETE',
  FAIL = 'FAIL'
}

@DefaultScope({ include: [{ model: () => Order }] })
@Table({ modelName: 'transaction' })
export class Payment extends Model<Payment> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number;

  @Column({ type: DataType.ENUM({ values: Object.keys(PaymentStatus) }) })
  status?: PaymentStatus;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @Column({ type: DataType.INTEGER })
  amount: number;

  @Column({ type: DataType.STRING })
  currency: string;

  @ForeignKey(() => Order)
  @Column({ type: DataType.INTEGER })
  orderId: string;

  @CreatedAt
  createdAt?: Date;

  @UpdatedAt
  updatedAt?: Date;

  @BelongsTo(() => Order)
  order: Order;
}
