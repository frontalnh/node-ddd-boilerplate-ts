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
  AllowNull
} from 'sequelize-typescript';

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  UNAUTHORIZED = 'UNAUTHORIZED'
}

@DefaultScope({
  order: [['createdAt', 'DESC']]
})
@Table({ modelName: 'user', underscored: true })
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER
  })
  id: number;

  @Default(UserStatus.UNAUTHORIZED)
  @Column({ type: DataType.ENUM({ values: Object.keys(UserStatus) }) })
  status: UserStatus;

  @Column({
    type: DataType.STRING
  })
  email?: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    comment: '유저의 핸드폰 번호로 "+82 01012341234" 와 같은 형태를 가진다.'
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    comment: '유저의 생년월일로 1992-04-30 과 같은 형태를 가진다.'
  })
  birthday: string;

  @Column({
    type: DataType.STRING
  })
  password?: string;

  @Column({
    type: DataType.STRING
  })
  firstName: string;

  @Column({
    type: DataType.STRING
  })
  lastName: string;

  @CreatedAt
  createdAt?: Date;

  @UpdatedAt
  updatedAt?: Date;
}
