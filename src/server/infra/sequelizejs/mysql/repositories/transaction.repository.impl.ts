import { Filter } from '@common/models/QueryOption';
import { Transaction } from '@domain/transaction/transaction.model';
import { DestroyOptions, UpdateOptions } from 'sequelize';
import sequelize = require('sequelize');

export class TransactionRepositoryImpl {
  constructor() {}

  public async save(transaction: Transaction) {
    return transaction.save();
  }

  public async findAll(filter: Filter) {
    if (!filter.raw) filter.raw = true;

    return Transaction.findAll(filter);
  }

  public async findById(id: number) {
    return Transaction.findByPrimary(id, { raw: true });
  }

  public async update(transaction: Partial<Transaction>, option: UpdateOptions): Promise<[number, Transaction[]]> {
    return Transaction.update(transaction, option);
  }

  public async delete(option: DestroyOptions): Promise<number> {
    return Transaction.destroy(option);
  }
}
