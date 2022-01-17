import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductsService } from 'src/serivces/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  @Get()
  get(
    @Query('limit') limit = 50,
    @Query('offset') offset = 0,
    @Query('q') q: string,
  ) {
    const products = this.productService.findAll();
    return {
      data: products,
      limit,
      offset,
      q,
    };
  }
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.productService.findOne(id);
  }
  @Post()
  create(@Body() payload: any) {
    const product = this.productService.create(payload);
    return {
      message: 'created',
      product,
    };
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    const product = this.productService.update(id, payload);
    return {
      message: 'updated',
      id,
      product,
    };
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }
}
