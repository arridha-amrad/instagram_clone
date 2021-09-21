import { model, Model, Schema } from 'mongoose';

export interface IUserDetailsModel {
  user: Schema.Types.ObjectId | string;
  website: string;
  bio: string;
  phoneNumber: string;
  gender: string;
  followings: number;
  followers: number;
  imageURL: string;
}

export enum GENDER {
  female = 'female',
  male = 'male',
  preferNotToSay = 'preferNotToSay',
}

const UserDetailsSchema = new Schema<
  IUserDetailsModel,
  Model<IUserDetailsModel>,
  IUserDetailsModel
>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    followers: {
      type: Number,
      default: 0,
    },
    followings: {
      type: Number,
      default: 0,
    },
    imageURL: {
      type: String,
      default: '',
    },
    bio: {
      type: String,
      default: '',
    },
    website: {
      type: String,
      default: '',
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'preferNotToSay'],
      default: 'preferNotToSay',
    },
    phoneNumber: {
      type: String,
      default: '',
    },
  },
  { timestamps: true },
);

const UserDetailsModel = model<IUserDetailsModel>(
  'UserDetails',
  UserDetailsSchema,
);

export default UserDetailsModel;
