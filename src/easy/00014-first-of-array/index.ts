export type First1<T extends any[]> = T extends [] ? never : T[0];

export type First2<T extends any[]> = T extends [infer F, ...infer _]
  ? F
  : never;
