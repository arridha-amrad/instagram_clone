import { AuthenticatedUserData } from '../dto/AuthData';
import { IUserModel } from '../models/UserModel';

export const authenticatedUserDataMapper = (
  user: IUserModel,
): AuthenticatedUserData => {
  const data: AuthenticatedUserData = {
    _id: user._id,
    bio: user.bio,
    email: user.email,
    followers: user.followers,
    followings: user.followings,
    fullName: user.fullName,
    gender: user.gender,
    imageURL: user.imageURL,
    isActive: user.isActive,
    isLogin: user.isLogin,
    phoneNumber: user.phoneNumber,
    role: user.role,
    username: user.username,
    website: user.website,
  };
  return data;
};
