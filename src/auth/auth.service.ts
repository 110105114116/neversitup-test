import { Injectable } from '@nestjs/common';
import * as users from './user.json';
import * as fs from 'fs';

@Injectable()
export class AuthService {
  register(
    email: string,
    password: string,
    name: string,
  ) {
    if(users.find((user) => user.email === email)) return 'User already exists';

    users.push({
      id: users.length + 1,
      email,
      password,
      name,
      isActive: true
    });

    fs.writeFileSync('./src/auth/user.json', JSON.stringify(users));

    const response = {
      message: 'User created successfully',
      data: {
        id: users.length,
        name,
        email,
        isActive: true
      }
    }
    
    return response;
  }

  login(
    email: string, 
    password: string
  ) {
    const user = users.find((user) => user.email === email);
    if (!user) return 'User not found';
    if (user.password !== password) return 'Wrong password';

    return {
      message: `Login success`,
      user
    }
  }
}
