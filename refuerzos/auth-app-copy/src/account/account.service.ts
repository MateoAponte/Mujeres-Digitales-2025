import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

/**
 * Service that manages the accounts and their interactions
 * @category Services
 * @service
 */
@Injectable()
export class AccountService {
  /**
   * Create a new account
   */
  create(createAccountDto: CreateAccountDto) {
    return 'This action adds a new account';
  }

  /**
   * Find all the accounts availables
   */
  findAll() {
    return `This action returns all account`;
  }

  /**
   * Find one account by id
   */
  findOne(id: number) {
    return `This action returns a #${id} account`;
  }

  /**
   * Update an account by id
   */
  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  /**
   * Remove an account by id
   */
  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
