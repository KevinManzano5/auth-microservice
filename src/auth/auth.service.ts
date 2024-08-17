import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async registerUser() {
    return 'User registered';
  }
}
