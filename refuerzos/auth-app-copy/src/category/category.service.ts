import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './category.entity';

const category: Category = {
  categoryId: '7b7116f7-7f6a-4a43-94fb-f7645379d212',
  name: 'category-name',
  icon: 'category-icon',
};

@Injectable()
export class CategoryService {
  create(createCategoryDto: CreateCategoryDto) {
    const validateUrl = createCategoryDto.icon.match(/^https?:\/\//) || [];
    if (validateUrl.length <= 0)
      throw new BadRequestException('The DTO is not valid');

    if (createCategoryDto.name === category.name)
      throw new HttpException(
        'The resource already exists',
        HttpStatus.CONFLICT,
      );

    return {
      message: 'Category created successfully',
      statusCode: HttpStatus.OK,
      data: {
        categoryId: category.categoryId,
      },
    };
  }

  findAll() {
    return `This action returns all category`;
  }

  findOne(id: string) {
    return `This action returns a ${id} category`;
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: string) {
    return `This action removes a #${id} category`;
  }
}
