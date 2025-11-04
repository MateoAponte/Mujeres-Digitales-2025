import { Test } from '@nestjs/testing';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './category.entity';

describe('Test all the features of the Category Controller', () => {
  let controller: CategoryController;
  const mockCategoryService = {
    // Simulación del Servicio real
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  const id = '7b7116f7-7f6a-4a43-94fb-f7645379d212';
  const createCategoryDto: CreateCategoryDto = {
    name: 'category-name',
    icon: 'category-icon',
  };
  const mockCategory: Category = {
    categoryId: '7b7116f7-7f6a-4a43-94fb-f7645379d212',
    name: 'category-name',
    icon: 'category-icon',
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CategoryController],
      providers: [
        {
          provide: CategoryService,
          useValue: mockCategoryService, // Mockearlo
        },
      ],
    }).compile();

    controller = moduleRef.get(CategoryController);
    jest.clearAllMocks();
  });

  it('Should call the service execute the "create()" function and return the Category', async () => {
    // Arrange: Crear las variables
    mockCategoryService.create.mockResolvedValue(mockCategory);

    // Act: Ejecutar código
    const result = await controller.create(createCategoryDto);

    // Assert: Expectar el código
    expect(mockCategoryService.create).toHaveBeenCalledTimes(1);
    expect(mockCategoryService.create).toHaveBeenCalledWith(createCategoryDto);
    expect(result).toBe(mockCategory);
  });

  it('Should call the service execute the "findAll()" function and return the result', async () => {
    // Arrange
    mockCategoryService.findAll.mockResolvedValue([mockCategory, mockCategory]);

    // Act
    const result = await controller.findAll();

    expect(mockCategoryService.findAll).toHaveBeenCalledTimes(1);
    expect(mockCategoryService.findAll).toHaveBeenCalledWith();
    expect(result).toEqual([mockCategory, mockCategory]);
    expect(result.length).toBe(2);
  });

  it('Should call the service execute the "findOne()" function and return the result', async () => {
    // Arrange
    mockCategoryService.findOne.mockResolvedValue(mockCategory);

    // Act
    const result = await controller.findOne(id);

    // Assert
    expect(mockCategoryService.findOne).toHaveBeenCalledTimes(1);
    expect(mockCategoryService.findOne).toHaveBeenCalledWith(id);
    expect(result).toBe(mockCategory);
  });

  it('Should call the service execute the "delete()" function and return the result', async () => {
    // Arrange
    mockCategoryService.remove.mockResolvedValue(mockCategory);

    // Act
    const result = await controller.remove(id);

    // Assert
    expect(mockCategoryService.remove).toHaveBeenCalledTimes(1);
    expect(mockCategoryService.remove).toHaveBeenCalledWith(id);
    expect(result).toBe(mockCategory);
  });

  it('Should call the service execute the "update()" function and return the result', async () => {
    // Arrange
    mockCategoryService.update.mockResolvedValue(mockCategory);

    // Act
    const result = await controller.update(id, createCategoryDto);

    // Assert
    expect(mockCategoryService.update).toHaveBeenCalledTimes(1);
    expect(mockCategoryService.update).toHaveBeenCalledWith(
      id,
      createCategoryDto,
    );
    expect(result).toBe(mockCategory);
  });
});
