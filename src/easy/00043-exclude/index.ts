/**
 * Distributive Conditional Types
 * `T extends U` condition is evaluated for each item of T
 * If T is assignable to U then the result is never (exclusion)
 * otherwise the result is T (inclusion)
 */
export type MyExclude<T, U> = T extends U ? never : T;
