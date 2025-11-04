import { applyDecorators, HttpStatus } from "@nestjs/common"
import { ApiResponse } from "@nestjs/swagger";
import { DefaultResponse } from "../interfaces/IResponse";

// GENERALIZAR LOS ERRORES -> A nivel de documentación
// Son los errores que yo se que mi aplicación va a mostrar en la mayoría de los casos
export const DefaultErrorsDoc = (): MethodDecorator => {
  return applyDecorators(
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: 'The api was not created successfully the resource',
      type: DefaultResponse,
      example: {
        status: HttpStatus.BAD_REQUEST,
        message: 'The api was not created successfully the resource',
      }
    }),

    ApiResponse({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      description: 'The server encountered an internal error',
      type: DefaultResponse,
      example: {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'The server encountered an internal error',
      }
    }),

    ApiResponse({
      status: HttpStatus.UNAUTHORIZED,
      description: 'The user is not authorized to access this resource',
      type: DefaultResponse,
      example: {
        status: HttpStatus.UNAUTHORIZED,
        message: 'The user is not authorized to access this resource',
      }
    })
  );
}