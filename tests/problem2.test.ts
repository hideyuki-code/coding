import problem2 from '../solutions/problem2';

describe('問題2: 文字列の反転と母音カウント', () => {
  test('サンプル入力のテスト', () => {
    expect(problem2('Hello World')).toBe('反転後：dlroW olleH、母音の数：3');
  });

  test('空の文字列', () => {
    expect(problem2('')).toBe('反転後：、母音の数：0');
  });

  test('母音のみの文字列', () => {
    expect(problem2('aeiou')).toBe('反転後：uoiea、母音の数：5');
  });

  test('母音を含まない文字列', () => {
    expect(problem2('rhythm')).toBe('反転後：mhtyhr、母音の数：0');
  });

  test('大文字小文字混在の母音', () => {
    expect(problem2('AeIoU')).toBe('反転後：UoIeA、母音の数：5');
  });
}); 