import { HttpStatus } from "@nestjs/common";

export interface IDefaultResponse {
  message: string;
  status: HttpStatus;
}

export interface ISuccessResponse {
  status: HttpStatus;
  data: any;
  message?: string;
}

export class DefaultResponse implements IDefaultResponse {
  message: string;

  status: HttpStatus;
}

export class DefaultSuccessResponse implements ISuccessResponse {
  status: HttpStatus;
  data: any;
}