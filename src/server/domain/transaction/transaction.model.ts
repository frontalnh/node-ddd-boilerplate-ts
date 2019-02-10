import {
  Table,
  PrimaryKey,
  AutoIncrement,
  Column,
  DataType,
  Model,
  Default,
  CreatedAt,
  UpdatedAt,
  DefaultScope,
  ForeignKey
} from 'sequelize-typescript';
import { User } from '@domain/user/user.model';

@DefaultScope({
  order: [['createdAt', 'DESC']]
})
@Table({ modelName: 'transaction', underscored: true })
export class Transaction extends Model<Transaction> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER
  })
  id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.NUMBER })
  fromUserId: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.NUMBER })
  toUserId: number;

  @CreatedAt
  createdAt?: Date;

  @UpdatedAt
  updatedAt?: Date;
}
