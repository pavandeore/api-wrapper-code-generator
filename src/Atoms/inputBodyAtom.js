import { atom } from 'recoil';

const inputBodyState = atom({
    key: 'inputBodyState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });

export default inputBodyState;
