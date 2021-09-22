import { NextFunction, Request, Response } from 'express';
import { HTTP_CODE } from '../enums/HTTP_CODE';
import { responseSuccess } from '../ServerResponse';
import ServerErrorException from '../exceptions/ServerErrorException';
import * as UserService from '../services/UserService';
import argon2 from 'argon2';

export const me = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await UserService.findUserById(req.userId);
    return responseSuccess(res, HTTP_CODE.OK, data);
  } catch (err) {
    console.log(err);
    next(new ServerErrorException());
  }
};

export const updateUserData = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const result = await UserService.findUserByIdAndUpdate(
      req.cookies.COOKIE_ID,
      { ...req.body },
    );
    return responseSuccess(res, HTTP_CODE.OK, result);
  } catch (err) {
    console.log(err);
    next(new ServerErrorException());
  }
};

export const changePassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await UserService.findUserById(req.cookies.COOKIE_ID);
    if (user) {
      const isMatch = await argon2.verify(user.password ?? '', oldPassword);
      if (isMatch) {
        const newHashedPassword = await argon2.hash(newPassword);
        const result = await UserService.findUserByIdAndUpdate(
          req.cookies.COOKIE_ID,
          { password: newHashedPassword },
        );
        if (result) {
          return responseSuccess(res, HTTP_CODE.OK, 'password changed');
        }
      }
    }
  } catch (err) {
    console.log(err);
    next(new ServerErrorException());
  }
};
