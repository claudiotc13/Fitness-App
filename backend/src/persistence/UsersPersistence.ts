import mongoose from 'mongoose';
import User, { IUser } from '../models/User';

export class UserPersistence {
  async saveNewUser(user: IUser): Promise<IUser> {
    return await user.save();
  }

  async getUserByUsername(username: string): Promise<IUser | null> {
    return await User.findOne({ username }).exec();
  }

  async updateUser(id: string, user: Partial<IUser>): Promise<IUser | null> {
    return await User.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  async deleteUser(id: string): Promise<IUser | null> {
    return await User.findByIdAndDelete(id).exec();
  }
}