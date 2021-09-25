import { DbAddAccount } from './db-add-account'
import { Encryptor } from '../../protocols/encryptor'

interface SutTypes {
  sut: DbAddAccount
  encryptorStub: Encryptor
}

const makeEncryptor = (): Encryptor => {
  class EncryptorStub implements Encryptor {
    async encrypt (value: string): Promise<string> {
      return await new Promise(resolve => resolve('hashed_password'))
    }
  }
  return new EncryptorStub()
}

const makeSut = (): SutTypes => {
  const encryptorStub = makeEncryptor()
  const sut = new DbAddAccount(encryptorStub)
  return {
    sut,
    encryptorStub: encryptorStub
  }
}

describe('DbAddAccount UseCase', () => {
  test('Should call Encryptor with correct password', async () => {
    const { sut, encryptorStub } = makeSut()
    const encryptSpy = jest.spyOn(encryptorStub, 'encrypt')
    const accountData = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password'
    }
    await sut.add(accountData)
    expect(encryptSpy).toHaveBeenCalledWith(accountData.password)
  })
})
