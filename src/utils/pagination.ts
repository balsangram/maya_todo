import { Response } from "express";

export const sendPaginationResponse = (
  res: Response,
  statusCode: number,
  message: string,
  data: unknown,
  page: number,
  limit: number,
  total: number
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
};