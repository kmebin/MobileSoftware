import faker from 'faker';
import type {info} from './info';

// 함수를 정의하고 export를 한번에
export const create = (): info => {
  return {
    id: faker.datatype.uuid(),
    birthday: faker.date.recent(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    comments: faker.lorem.paragraph(),
  };
};
