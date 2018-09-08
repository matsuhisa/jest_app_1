import { Huamn } from '../../src/human';

describe('#name', () => {
  it('', () => {
    const human = new Huamn("foo")
    expect(human.greet()).toBe("こんにちは。 foo です");
  })
})

// const Huamn = require('../../src/human.js');
//
// test('#name', () => {
//   const human = new Huamn("foo")
//
//   expect(human.name).toBe("foo");
//   expect(human.greet()).toBe("こんにちは。 foo です");
// });
