import { User } from 'server/domain/user/User';
import { ClientSession, Types } from 'mongoose';

import { MongoUserModel } from '@infra/mongodb/models/MongoUserModel';
import { UserRepository } from '@domain/user/UserRepository';
import { MysqlUser } from '@infra/sequelizejs/mysql/models/MysqlUser';

class UserFindObject {
  $and?: any[];
  constructor() {
    this.$and = [];
  }
}

export class UserRepositoryImpl implements UserRepository {
  async save(user: User): Promise<User> {
    let _ = MysqlUser.create(user, { raw: true });
    let result = new User();
    Object.assign(result, _);
    return result;
  }

  async findById(id: number, session?: ClientSession): Promise<User> {
    let _ = await MysqlUser.findById(id, { raw: true });
    let user = new User();
    Object.assign(user, _);

    return user;
  }

  findByQuery = (query, session?: ClientSession): Promise<User[]> => {
    let obj = this._setFindObject(query);

    if (session) {
      return MongoUserModel.find(obj)
        .session(session)
        .lean()
        .exec();
    }

    return MongoUserModel.find(obj)
      .lean()
      .exec();
  };

  _setFindObject(query): UserFindObject {
    let obj = new UserFindObject();

    if (query._id) {
      obj.$and.push({
        _id: query._id
      });
    }

    if (query.email) {
      obj.$and.push({ email: query.email });
    }

    if (query.phone) {
      obj.$and.push({ phone: query.phone });
    }

    if (query.searchKey) {
      obj.$and.push({
        $or: [
          { phone: { $regex: query.searchKey } },
          { name: { $regex: query.searchKey } }
        ]
      });
    }

    if (query.from && query.to) {
      obj.$and.push({
        createdAt: {
          $gte: query.from,
          $lte: query.to
        }
      });
    }

    if (obj.$and.length == 0) return {};

    return obj;
  }
}
