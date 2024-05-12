import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member } from './entities/member.entity';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  async create(@Body() member: Member): Promise<Member> {
    return this.membersService.create(member);
  }

  @Get()
  async findAll(): Promise<Member[]> {
    return this.membersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.membersService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() member: Member,
  ): Promise<Member> {
    return this.membersService.update(id, member);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.membersService.delete(id);
  }
}
