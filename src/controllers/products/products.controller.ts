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

@Controller('products')
export class ProductsController {
  @Get()
  get(
    @Query('limit') limit = 50,
    @Query('offset') offset = 0,
    @Query('q') q: string,
  ) {
    return {
      data: [
        {
          id: 123,
          name: 'Leche de litro',
        },
        {
          id: 234,
          name: 'Leche condensada',
        },
      ],
      limit,
      offset,
      q,
    };
  }
  @Get(':id')
  getOne(@Param('id') id: string) {
    return `Product ID => ${id}`;
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'created',
      payload,
    };
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      message: 'updated',
      id,
      payload,
    };
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return `Deleted Product ID => ${id}`;
  }
}
