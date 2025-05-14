import problem1 from '../solutions/problem1';

describe('問題1: 数列の合計と偶数', () => {
  test('サンプル入力のテスト', () => {
    expect(problem1([5, 2, 8, 1, 7, 4])).toBe('合計：27、偶数の個数：3');
  });

  test('空の配列', () => {
    expect(problem1([])).toBe('合計：0、偶数の個数：0');
  });

  test('偶数のみの配列', () => {
    expect(problem1([2, 4, 6, 8])).toBe('合計：20、偶数の個数：4');
  });

  test('奇数のみの配列', () => {
    expect(problem1([1, 3, 5, 7])).toBe('合計：16、偶数の個数：0');
  });
}); 