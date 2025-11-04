import { applyDecorators, HttpStatus } from "@nestjs/common"
import { ApiBearerAuth, ApiOperation, ApiResponse } from "@nestjs/swagger"
import { DefaultErrorsDoc } from "src/common/decorators/defaultErrorsDoc"

export const GetAllUserDoc = (): MethodDecorator => {
  return applyDecorators(
    ApiBearerAuth(),

    ApiOperation({
      summary: 'Create a gell all users',
      description: 'Get all the users',
    }),

    ApiResponse({
      status: HttpStatus.OK,
      description: 'The user was created successfully',
      example: {
        status: HttpStatus.OK,
        message: 'The user was created successfully',
      }
    }),
    
    DefaultErrorsDoc()
  )
}