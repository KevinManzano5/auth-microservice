import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class AuthService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async registerUser(registerUserDto: RegisterUserDto) {
    return registerUserDto;
  }
}
