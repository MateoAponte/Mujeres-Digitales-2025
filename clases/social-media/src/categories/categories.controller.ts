import { Controller, Get, Param } from '@nestjs/common';
import { GetCategoryDto } from './dtos/get-category.dto';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get('/:id{/:subcategory}')
  getCategory(@Param() param: GetCategoryDto) {
    if (!!param.subcategory) {
      return this.categoriesService.getSubcategories(
        param.id,
        param.subcategory,
      );
    } else {
      return this.categoriesService.getCategory(param.id);
    }
  }
}
