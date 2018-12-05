import { UserModel } from '../../domain/user/User';
import { User } from 'server/domain/user/User';
import { ClientSession, Types } from 'mongoose';
import { UserRepository, UserQuery } from '../../domain/user/UserRepository';
import { removeNullEntity } from '../../utils';

class UserFindObject {
  $and?: any[];
  constructor() {
    this.$and = [];
  }
}

export class UserRepositoryImpl implements UserRepository {
  save(user: User, session?: ClientSession): Promise<User> {
    removeNullEntity(user);

    if (session) {
      return UserModel.findOneAndUpdate({ _id: user._id }, user)
        .session(session)
        .exec();
    }

    return UserModel.findOneAndUpdate({ _id: user._id }, user).exec();
  }

  findById(id: number, session?: ClientSession): Promise<User> {
    if (session) {
      return UserModel.findOne({ _id: id })
        .lean() // remove unnecessary mongoose entities, and extract clean object
        .session(session)
        .exec();
    }

    return UserModel.findOne({ _id: id })
      .lean()
      .exec();
  }

  findByQuery = (
    query: UserQuery,
    session?: ClientSession
  ): Promise<User[]> => {
    let obj = this._setFindObject(query);

    if (session) {
      return UserModel.find(obj)
        .session(session)
        .exec();
    }

    return UserModel.find(obj).exec();
  };

  _setFindObject(query: UserQuery): UserFindObject {
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
