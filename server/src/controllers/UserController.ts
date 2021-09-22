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
