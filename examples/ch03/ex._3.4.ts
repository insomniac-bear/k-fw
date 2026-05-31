import { h, hString } from "../../packages/runtime/src/h";

export const MessageComponent = ({ level, message }: { level: 'info' | 'error' | 'warning'; message: string }) => {
  const messageNode = hString(message);

  return h('div', { class: `message message--${level}`, children: [
    h('p', {}, [messageNode]),
  ]});
}
