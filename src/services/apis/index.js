import UserAPI from './userApi';

const create = () => {
  return {
    User: UserAPI(),
  };
};

export default {create};
