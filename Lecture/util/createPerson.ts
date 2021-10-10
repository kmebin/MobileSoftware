import faker from 'faker';
import type {info} from './info';

// 함수를 정의하고 export를 한번에
export const createPerson = (): info => {
  const name = faker.name.findName();
  return {
    id: faker.datatype.uuid(),
    birthday: faker.date.recent(),
    name,
    email: faker.internet.email(),
    comments: faker.lorem.paragraph(),
    avatarUrl: `https://ui-avatars.com/api/?name=${name.split(' ').join('+')}`,
  };
};
