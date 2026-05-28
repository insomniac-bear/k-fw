import { hFragment, h } from "../../packages/runtime/src/h";

export const lipsum = (count: number) => {
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`;

  return hFragment(
    Array(count).fill(h('p', {}, [text]))
  );
};
