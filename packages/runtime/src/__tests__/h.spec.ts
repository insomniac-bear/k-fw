import { h, hString } from '../h';
import { test, expect } from 'vitest';

test('h', () => {
  expect(h('div')).toEqual({
    type: 'element',
    tag: 'div',
    props: { on: {} },
    children: [],
    el: null,
    listeners: {},
  });
  
  expect(h('p', { on: {} }, [h('span', {on: {}}, [hString('Hello World')])]))
});
