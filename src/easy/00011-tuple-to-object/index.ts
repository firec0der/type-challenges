export type TupleToObject<T extends readonly PropertyKey[]> = {
  [v in T[number]]: v;
};
