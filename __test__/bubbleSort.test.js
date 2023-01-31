import { bubbleSort } from '../src/client/js/bubbleSort';

test('sorts array from least to greatest', () => {
    expect(bubbleSort([5, 7, 2, 4, 1])).toEqual([1, 2, 4, 5, 7]);
});