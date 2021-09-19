import mongoose, { Model, Schema } from 'mongoose';
import argon2 from 'argon2';
import { AuthenticationStrategy, RequiredAuthAction } from '../enums/UserEnum';

export interface IUserModel {
  _id: Schema.Types.ObjectId;
  username: string;
  fullName: string;
  strategy: AuthenticationStrategy;
  email: string;
  password: string;
  requiredAuthAction: RequiredAuthAction;
  jwtVersion: string;
  role: string;
  birthDay: string;
  // optional
  isActive?: boolean;
  isLogin?: boolean;
  isVerified?: boolean;
  // setup by mongoDB
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new mongoose.Schema<
  IUserModel,
  Model<IUserModel>,
  IUserModel
>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    birthDay: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin', 'moderator'],
      required: true,
      default: 'user',
    },
    password: {
      type: String,
      required: true,
    },
    strategy: {
      type: String,
      required: true,
      enum: ['default', 'google', 'facebook'],
    },
    requiredAuthAction: {
      type: String,
      enum: ['null', 'emailVerification', 'resetPassword'],
    },
    jwtVersion: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    isLogin: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

UserSchema.pre('save', async function (next) {
  const hashedPassword = await argon2.hash(this.password);
  this.password = hashedPassword;
  next();
});

const UserModel = mongoose.model<IUserModel>('User', UserSchema);

export default UserModel;
