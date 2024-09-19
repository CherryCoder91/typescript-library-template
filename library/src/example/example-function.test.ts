import { expect } from '@esm-bundle/chai';
import { exampleFunction } from './example-function.js';

it('exampleFunction should return hardcoded value -> I am library function', () => {
    expect(exampleFunction()).to.equal('I am library function');
});
