import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    } else {
      return user;
    }
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() user: User): Promise<any> {
    return this.userService.update(id, user);
  }
  @Post()
  async create(@Body() user: User): Promise<any> {
    return this.userService.create(user);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new NotFoundException('User does not exist');
    }
    return this.userService.delete(id);
  }
}
