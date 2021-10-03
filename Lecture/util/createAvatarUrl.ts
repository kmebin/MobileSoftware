import faker from 'faker';

export const createAvatarUrl = (): string => {
  const name = faker.name.findName();
  return `https://ui-avatars.com/api/?name=${name.split('').join('+')}`;
};
