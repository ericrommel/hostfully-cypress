import { faker } from '@faker-js/faker'

export function setRandomString(numOfWords?: number): string {
  if (numOfWords) {
    return faker.lorem.words(numOfWords)
  }

  return `${faker.word.sample()}-${faker.word.sample()}`
}
