import { applyDecorators, HttpStatus } from "@nestjs/common"
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse } from "@nestjs/swagger"
import { DefaultErrorsDoc } from "src/common/decorators/defaultErrorsDoc"
import { DefaultResponse } from "src/common/interfaces/IResponse"
import { CreateUserDto } from "src/user/dto/create-user.dto"

export const UpdateUserDoc = (): MethodDecorator => {
  return applyDecorators(
    ApiBearerAuth(),

    ApiOperation({
      summary: 'Update an existing user',
      description: 'Update an existing user using the most important information of the user and the currency that the user uses',
    }),

    ApiParam({
      name: 'id',
      required: true,
      type: String,
      description: 'User id',
      example: '1'
    }),
    ApiBody({
      description: 'User data to create a new account',
      type: CreateUserDto,
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