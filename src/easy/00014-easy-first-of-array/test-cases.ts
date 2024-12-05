import type { Equal, Expect } from "@type-challenges/utils";
import type { First1, First2 } from ".";

type cases<T> = [
  Expect<Equal<First1<[3, 2, 1]>, 3>>,
  Expect<Equal<First1<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First1<[]>, never>>,
  Expect<Equal<First1<[undefined]>, undefined>>,

  Expect<Equal<First2<[3, 2, 1]>, 3>>,
  Expect<Equal<First2<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First2<[]>, never>>,
  Expect<Equal<First2<[undefined]>, undefined>>
];

type errors = [
  // @ts-expect-error
  First1<"notArray">,
  // @ts-expect-error
  First1<{ 0: "arrayLike" }>,
  // @ts-expect-error
  First2<"notArray">,
  // @ts-expect-error
  First2<{ 0: "arrayLike" }>
];
