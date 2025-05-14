import fibonacci from '../solutions/problem3';

describe('問題3: フィボナッチ数列', () => {
  test('基本的なケース', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(6)).toBe(8);
    expect(fibonacci(7)).toBe(13);
  });

  test('より大きな数', () => {
    expect(fibonacci(10)).toBe(55);
    expect(fibonacci(15)).toBe(610);
    expect(fibonacci(20)).toBe(6765);
  });

  test('負の数の入力（例外処理）', () => {
    // 負の数が入力された場合は例外を投げるか、または特定の値を返すよう実装することが期待される
    // ここでは例外を投げることを期待する実装例
    expect(() => fibonacci(-1)).toThrow();
  });
}); 