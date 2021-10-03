import faker from 'faker';
import type {info} from './info';

const create = (): info => {
  return {
    id: faker.datatype.uuid(),
    birthday: faker.date.recent(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    comments: faker.lorem.paragraph(),
  };
};

export {create};
