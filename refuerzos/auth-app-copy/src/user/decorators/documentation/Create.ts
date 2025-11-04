import { applyDecorators, HttpStatus } from "@nestjs/common"
import { ApiBearerAuth, ApiOperation, ApiResponse } from "@nestjs/swagger"
import { DefaultErrorsDoc } from "src/common/decorators/defaultErrorsDoc"
import { DefaultSuccessResponse } from "src/common/interfaces/IResponse"

export const CreateUserDoc = (): MethodDecorator => {
  return applyDecorators(
    ApiBearerAuth(),
    
    ApiOperation({
      summary: 'Create a new user',
      description: 'Created a user using the most important information of the user and the currency that the user uses'
    }),

    ApiResponse({
      status: HttpStatus.OK,
      description: 'The user was created successfully',
      type: DefaultSuccessResponse,
      example: {
        status: HttpStatus.OK,
        data: {
          id: '8e686e83-6a6a-446a-9f18-2d87609a52601',
        }
      }
    }),

    DefaultErrorsDoc()
  )
}