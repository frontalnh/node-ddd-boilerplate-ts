import {
  AllowNull,
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  Default,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  Unique,
  UpdatedAt
} from 'sequelize-typescript';
import { UserType } from '@domain/user/User';

@Table
export class MysqlUser extends Model<MysqlUser> {
  @PrimaryKey
  @AutoIncrement
  @Column
  public id!: number;

  @AllowNull(false)
  @Column(DataType.TEXT)
  phone: string;

  @Column(DataType.TEXT)
  password: string;

  @Column(DataType.TEXT)
  email: string;

  @Column(DataType.TEXT)
  name: string;

  @Default(UserType.GENERAL)
  @Column(DataType.ENUM(UserType.GENERAL, UserType.ADMIN))
  userType: UserType = UserType.GENERAL;

  @CreatedAt
  public createdAt!: Date;

  @UpdatedAt
  public updatedAt!: Date;
}
