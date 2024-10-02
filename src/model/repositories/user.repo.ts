import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from '../schema/user';

export class UserRepository {
  constructor(
    @InjectModel(Users.name) private readonly userModel: Model<Users>,
  ) {}
}
