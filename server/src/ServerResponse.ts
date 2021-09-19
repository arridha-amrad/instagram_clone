import { Response } from 'express';
import { ObjectId } from 'mongoose';
import { HTTP_CODE } from './enums/HTTP_CODE';

export const responseWithCookie = (
  res: Response,
  encryptedAccessToken: string,
  userId: ObjectId,
): void => {
  res
    .status(200)
    .cookie(process.env.COOKIE_NAME, encryptedAccessToken, {
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24 * 5,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    })
    .cookie(process.env.COOKIE_ID, userId, {
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24 * 5,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    })
    .send('login');
};

export const responseWithCookieOnly = (
  res: Response,
  encryptedAccessToken: string,
): void => {
  res
    .status(200)
    .cookie(process.env.COOKIE_NAME, encryptedAccessToken, {
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24 * 5,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    })
    .send('cookie renew');
};

export const responseSuccess = <T>(
  res: Response,
  status: HTTP_CODE,
  data: T,
): void => {
  res.status(status).send(data);
};
