# 問題2: 文字列の反転と母音カウント - ヒント

## 問題概要
与えられた文字列を反転させ、母音（a, e, i, o, u）の個数をカウントして、指定された形式で結果を返す。

## ヒント段階

### 基本ヒント
1. 文字列を反転させる方法を考えましょう
2. 文字列に含まれる母音（a, e, i, o, u）を数える方法を考えましょう
3. 「反転後：XX、母音の数：YY」という形式の文字列を作成しましょう

### 詳細ヒント（必要な場合）

**文字列の反転方法**:
- JavaScriptには文字列を直接反転させるメソッドはありません
- 以下の手順で実現できます：
  1. 文字列を配列に変換（1文字ずつの配列）
  2. 配列を反転
  3. 配列を文字列に戻す

```typescript
// 文字列反転の基本パターン
const reversed = str.split('').reverse().join('');
```

**母音のカウント方法**:
- 母音は 'a', 'e', 'i', 'o', 'u' の5つ（大文字小文字を区別しない場合は、小文字に統一すると便利）
- 文字列を1文字ずつ調べて母音かどうかを判定する
- ループを使う方法：
```typescript
let vowelCount = 0;
for (const char of str.toLowerCase()) {
  if ('aeiou'.includes(char)) {
    vowelCount++;
  }
}
```
- 配列メソッドを使う方法：
```typescript
// 文字列を配列に分解
// 母音だけをフィルタリング
// 結果の配列の長さが母音の数
```

**大文字小文字の扱い**:
- 母音をカウントする際は大文字小文字を区別しないことが多いです
- `toLowerCase()` または `toUpperCase()` メソッドで統一してから判定すると良いでしょう

**文字列の作成方法**:
- テンプレートリテラルを使うと簡潔です
```typescript
// バッククォート(`)を使い、${変数名}で変数を埋め込める
`反転後：${reversed}、母音の数：${vowelCount}`
```

## 学習ポイント
- 文字列メソッド: `split()`, `toLowerCase()`, `includes()`
- 配列メソッド: `reverse()`, `join()`, `filter()`
- テンプレートリテラルによる文字列の作成
- 繰り返し処理による文字列の操作 