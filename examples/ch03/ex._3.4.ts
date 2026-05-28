import { h } from "../../packages/runtime/src/h";

export const MessageComponent = ({ level, message }: { level: 'info' | 'error' | 'warning'; message: string }) => {
  return h('div', { class: `message message--${level}`, children: [
    h('p', {}, [message]),
  ]});
}
