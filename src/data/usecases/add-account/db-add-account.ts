import { AccountModel, AddAccountModel, AddAccount, Encryptor } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encryptor: Encryptor

  constructor (encryptor: Encryptor) {
    this.encryptor = encryptor
  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    await this.encryptor.encrypt(account.password)
    return new Promise(resolve => resolve(null))
  }
}
