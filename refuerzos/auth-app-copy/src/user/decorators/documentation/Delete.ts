import { applyDecorators, HttpStatus } from "@nestjs/common"
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse } from "@nestjs/swagger"
import { DefaultErrorsDoc } from "src/common/decorators/defaultErrorsDoc"
import { DefaultResponse } from "src/common/interfaces/IResponse"

export const DeleteUserDoc = (): MethodDecorator => {
  return applyDecorators(
    ApiBearerAuth(),

    ApiOperation({
      summary: 'Delete an existing user',
      description: 'Delete an existing user using the most important information of the user and the currency that the user uses',
    }),

    ApiParam({
      name: 'id',
      required: true,
      type: String,
      description: 'User id',
      example: '1'
    }),

    ApiResponse({
      status: HttpStatus.OK,
      description: 'The user was created successfully',
      type: DefaultResponse,
      example: {
        status: HttpStatus.OK,
        message: 'The user was created successfully',
      }
    }),

    DefaultErrorsDoc()
  )
}