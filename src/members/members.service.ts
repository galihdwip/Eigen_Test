import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member } from './entities/member.entity';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
  ) {}

  async create(member: Member): Promise<Member> {
    return this.memberRepository.save(member);
  }

  // async findAll() {
  //   return await this.memberRepository.find();
  // }

  async findAll(): Promise<Member[]> {
    return this.memberRepository.find({ relations: ['borrowedBooks'] });
  }
  
  async findOne(id: number): Promise<Member> {
    return this.memberRepository.findOne({ where: { id }, relations: ['borrowedBooks'] });
}


async update(id: number, member: Member): Promise<Member> {
  await this.memberRepository.update(id, member);
  return this.memberRepository.findOne({ where: { id } });
}

  async delete(id: number): Promise<void> {
    await this.memberRepository.delete(id);
  }
}
