const screens = {
  keyri: undefined,
  home: undefined,
  todoList: undefined,
};

export type ScreenName = keyof typeof screens;

export type Navigate = (screen: ScreenName) => void;
