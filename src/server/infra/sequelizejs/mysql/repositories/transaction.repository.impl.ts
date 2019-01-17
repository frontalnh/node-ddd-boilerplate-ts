import { Transaction } from '@domain/transaction/transaction.model';
import { DestroyOptions, UpdateOptions } from 'sequelize';
import { Filter } from '@common/models/QueryOption';
import sequelize = require('sequelize');

export class TransactionRepositoryImpl {
  constructor() {}

  async save(transaction: Transaction) {
    return await transaction.save();
  }

  async findAll(filter: Filter) {
    if (!filter.raw) filter.raw = true;
    return await Transaction.findAll(filter);
  }

  async getTotalAmount(
    userId,
    assetId
  ): Promise<{ id: number; totalInvestAmount: number }> {
    let result = await (<any>Transaction.findAll({
      attributes: [
        'id',
        [sequelize.fn('SUM', sequelize.col('amount')), 'totalInvestAmount']
      ],
      where: { assetId, fromUserId: userId },
      raw: true
    }));

    console.log(result);

    return result[0];
  }

  async findById(id: number) {
    return await Transaction.findByPrimary(id, { raw: true });
  }

  async update(
    transaction: Partial<Transaction>,
    option: UpdateOptions
  ): Promise<[number, Transaction[]]> {
    return await Transaction.update(transaction, option);
  }

  async delete(option: DestroyOptions): Promise<number> {
    return await Transaction.destroy(option);
  }
}
