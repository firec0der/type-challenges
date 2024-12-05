import type { Equal, Expect } from "@type-challenges/utils";
import type { MyReadonly } from ".";

interface Todo {
  title: string;
  description: string;
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

// @ts-expect-error cannot reassign a readonly property
todo.title = "Hello";
// @ts-expect-error cannot reassign a readonly property
todo.description = "barFoo";
