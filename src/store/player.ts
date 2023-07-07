import { atom, selector } from 'recoil';

export const isPlayingState = atom<boolean>({
  key: 'isPlayingState',
  default: false,
});

export const setIsPlayingState = selector<boolean>({
  key: 'setIsPlayingState',
  get: ({ get }) => get(isPlayingState),
  set: ({ set }, newValue) => set(isPlayingState, newValue),
});
