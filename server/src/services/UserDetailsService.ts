import { ObjectId } from 'mongoose';
import UserDetailsModel, {
  IUserDetailsModel,
} from '../models/UserDetailsModel';

export const save = async (userId: ObjectId): Promise<IUserDetailsModel> => {
  const newDetails = new UserDetailsModel({ user: userId });
  return newDetails.save();
};

export const findOneAndUpdate = async (
  userId: ObjectId | string,
  data: IUserDetailsModel,
): Promise<IUserDetailsModel | null> => {
  return UserDetailsModel.findOneAndUpdate(
    {
      user: userId,
    },
    { ...data },
    { upsert: true },
  );
};

export const findByUserId = async (
  userId: string,
): Promise<IUserDetailsModel | null> => {
  return UserDetailsModel.findOne({ user: userId });
};
