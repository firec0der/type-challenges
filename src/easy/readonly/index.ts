export type MyReadonly<T extends object> = {
  readonly [k in keyof T]: T[k];
};
