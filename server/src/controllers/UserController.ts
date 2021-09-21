import { NextFunction, Request, Response } from 'express';
import { HTTP_CODE } from '../enums/HTTP_CODE';
import { responseSuccess } from '../ServerResponse';
import ServerErrorException from '../exceptions/ServerErrorException';
import * as UserService from '../services/UserService';
import * as UserDetailsService from '../services/UserDetailsService';

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

export const addUserDetails = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const result = await UserDetailsService.findOneAndUpdate(
      req.cookies.COOKIE_ID,
      {
        ...req.body,
      },
    );
    return responseSuccess(res, HTTP_CODE.OK, result);
  } catch (err) {
    console.log(err);
    next(new ServerErrorException());
  }
};
