import { LoginResponse } from './../dto/AuthData';
import { NextFunction, Request, Response } from 'express';
import { HTTP_CODE } from '../enums/HTTP_CODE';
import { responseSuccess } from '../ServerResponse';
import ServerErrorException from '../exceptions/ServerErrorException';
import * as UserService from '../services/UserService';

export const me = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await UserService.findUserById(req.userId);
    if (data) {
      const {
        _id,
        birthDay,
        createdAt,
        email,
        fullName,
        isActive,
        isLogin,
        isVerified,
        role,
        updatedAt,
        username,
      } = data;
      const user: LoginResponse = {
        _id,
        birthDay,
        fullName,
        isActive,
        isVerified,
        role,
        updatedAt,
        username,
        email,
        createdAt,
        isLogin,
      };
      return responseSuccess(res, HTTP_CODE.OK, user);
    }
  } catch (err) {
    console.log(err);
    next(new ServerErrorException());
  }
};
