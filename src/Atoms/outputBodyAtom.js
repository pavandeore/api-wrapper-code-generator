import { atom } from 'recoil';

const outputBodyState = atom({
    key: 'outputBodyState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });

export default outputBodyState;
