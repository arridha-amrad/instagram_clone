import { Schema } from 'mongoose';
import UserDetailsModel from '../models/UserDetailsModel';
import UserModel, { IUserModel } from '../models/UserModel';

export const save = async (user: IUserModel): Promise<IUserModel> => {
  const newUser = new UserModel(user);
  const savedUser = await newUser.save();
  const details = new UserDetailsModel({
    user: savedUser._id,
  });
  await details.save();
  return savedUser;
};

export const findUserByUsernameOrEmail = async (
  usernameOrEmail: string,
): Promise<IUserModel | null> => {
  return UserModel.findOne(
    usernameOrEmail.includes('@')
      ? { email: usernameOrEmail }
      : { username: usernameOrEmail },
  );
};

export const findUserById = async (
  userId: Schema.Types.ObjectId | string,
): Promise<IUserModel | null> => {
  return UserModel.findById(userId).populate('details');
};

export const findUserByIdAndUpdate = async (
  id: Schema.Types.ObjectId | string,
  update: Partial<IUserModel>,
): Promise<IUserModel | null> => {
  return UserModel.findByIdAndUpdate(id, { ...update });
};
