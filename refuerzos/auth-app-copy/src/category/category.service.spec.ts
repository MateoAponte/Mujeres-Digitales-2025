import { Test } from '@nestjs/testing';
import { CategoryService } from './category.service';
import { BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
import { stat } from 'fs';

describe('Test all the features of the Category Service', () => {
  let service: CategoryService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [CategoryService],
    }).compile();

    service = moduleRef.get<CategoryService>(CategoryService);
    jest.clearAllMocks();
  });

  describe('Test all the test cases of the "create()" function', () => {
    it('Should return a statusCode 400 when the icon does not is a URL', async () => {
      const createCategoryDto = {
        name: 'category-name',
        icon: 'category-icon',
      };

      // Act & Assert
      await expect(() => service.create(createCategoryDto)).toThrow(
        new BadRequestException('The DTO is not valid'),
      );
    });

    it('Should return a statusCode 409 when the name already exists in the db', async () => {
      const createCategoryDto = {
        name: 'category-name',
        icon: 'https://category-icon',
      };

      await expect(() => service.create(createCategoryDto)).toThrow(
        new HttpException('The resource already exists', HttpStatus.CONFLICT),
      );
    });

    it('Should return a statusCode 400 when the icon does not is a URL', async () => {
      const id = '7b7116f7-7f6a-4a43-94fb-f7645379d212';
      const createCategoryDto = {
        name: 'valid-category-name',
        icon: 'https://category-icon',
      };

      const result = await service.create(createCategoryDto);

      expect(result).toEqual({
        message: 'Category created successfully',
        statusCode: HttpStatus.OK,
        data: {
          categoryId: id,
        },
      });
    });
  });
});
