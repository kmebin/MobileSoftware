type info = {
  id: string;
  birthday: Date;
  name: string;
  email: string;
  comments: string;
};
// 다른 소스코드에서 info 타입을 import하게 해 줌
export type {info};
