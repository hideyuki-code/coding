# TypeScript 基本知識とヒント集

## TypeScriptの基本

### 基本型

```typescript
// 基本型
let num: number = 10;
let str: string = "Hello";
let bool: boolean = true;
let arr1: number[] = [1, 2, 3];
let arr2: Array<string> = ["a", "b", "c"];
let tuple: [string, number] = ["age", 25];
let any: any = "anything";
let unknown: unknown = 4;
let obj: { name: string, age: number } = { name: "Alice", age: 25 };
```

### 関数の型定義

```typescript
// 基本的な関数
function add(a: number, b: number): number {
  return a + b;
}

// アロー関数
const multiply = (a: number, b: number): number => a * b;

// オプションパラメータと初期値
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

// 可変長引数
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
```

### 配列操作メソッド

```typescript
// map: 各要素を変換
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8]

// filter: 条件に合う要素だけ抽出
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// reduce: 要素を集約
const sum = numbers.reduce((total, n) => total + n, 0); // 10

// find: 条件に合う最初の要素を検索
const found = numbers.find(n => n > 2); // 3

// some: 条件に合う要素があるかチェック
const hasEven = numbers.some(n => n % 2 === 0); // true

// every: すべての要素が条件を満たすかチェック
const allPositive = numbers.every(n => n > 0); // true
```

### 文字列操作

```typescript
// 文字列から配列へ
const str = "Hello";
const chars = str.split(""); // ["H", "e", "l", "l", "o"]

// 配列から文字列へ
const joined = chars.join(""); // "Hello"

// 部分文字列
const sub = str.substring(1, 3); // "el"

// 検索
const index = str.indexOf("l"); // 2

// 置換
const replaced = str.replace("H", "J"); // "Jello"

// 大文字小文字
const upper = str.toUpperCase(); // "HELLO"
const lower = str.toLowerCase(); // "hello"

// 文字列の反転（直接のメソッドはない）
const reversed = str.split("").reverse().join(""); // "olleH"
```

## 問題タイプ別のヒント

### 1. 数列の合計と偶数

**ヒント**:
- 配列の合計には `reduce()` メソッドを使用
- 偶数の個数を数えるには `filter()` で偶数のみ抽出してから `length` を取得
- 偶数判定は `number % 2 === 0`

```typescript
// 例：配列の合計
const sum = numbers.reduce((total, n) => total + n, 0);

// 例：偶数のみをフィルタリング
const evens = numbers.filter(n => n % 2 === 0);
```

### 2. 文字列の反転と母音カウント

**ヒント**:
- 文字列反転: `str.split("").reverse().join("")`
- 母音チェック: 文字が 'aeiouAEIOU' に含まれるか確認
- 大文字小文字両方チェックするには `toLowerCase()` を使う

```typescript
// 例：文字列の反転
const reversed = str.split("").reverse().join("");

// 例：母音をチェック
const isVowel = (char: string): boolean => {
  return "aeiouAEIOU".includes(char);
};

// 例：文字列内の母音をカウント
const vowelCount = str.split("").filter(isVowel).length;
```

### 3. フィボナッチ数列

**ヒント**:
- 再帰的実装: 単純だがパフォーマンスは低い
- 反復的実装: ループを使用しメモ化（値を記憶）
- 大きな数の場合、再帰は避けてループを使用

```typescript
// 例：再帰的実装（非効率）
function fibRecursive(n: number): number {
  if (n <= 1) return n;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// 例：反復的実装（効率的）
function fibIterative(n: number): number {
  if (n <= 1) return n;
  
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}
```

### 4. ビット操作

**ヒント**:
- 2進数変換: `number.toString(2)`
- ビットカウント: 2進数文字列で "1" をカウント
- ビット演算子: `&` (AND), `|` (OR), `^` (XOR), `~` (NOT), `<<` (左シフト), `>>` (右シフト)

```typescript
// 例：2進数に変換
const binary = (5).toString(2); // "101"

// 例：1のビットをカウント
const countOnes = binary.split("").filter(bit => bit === "1").length;
```

### 5-7. オブジェクトとデータ構造

**ヒント**:
- オブジェクト操作: `Object.keys()`, `Object.values()`, `Object.entries()`
- Mapの使用: キーと値のペアを管理する際に役立つ
- Setの使用: 重複のないコレクションを作成

```typescript
// 例：オブジェクトのプロパティ取得
const person = { name: "Alice", age: 30 };
const keys = Object.keys(person); // ["name", "age"]

// 例：MapとSetの使用
const map = new Map<string, number>();
map.set("a", 1);
map.set("b", 2);

const set = new Set<number>([1, 2, 2, 3]); // {1, 2, 3} (重複は削除される)
```

### 8-10. TypeScript特有の機能

**ヒント**:
- ジェネリック型: 型を引数として受け取る
- インターフェース: オブジェクトの形状を定義
- 型ガード: 実行時の型チェック

```typescript
// 例：ジェネリック関数
function identity<T>(arg: T): T {
  return arg;
}

// 例：インターフェース
interface Shape {
  area(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}
  
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// 例：型ガード
function isString(value: unknown): value is string {
  return typeof value === "string";
}
```

### 11-15. アルゴリズム基礎

**ヒント**:
- 線形探索: 配列全体を順に調べる方法
- 二分探索: ソート済み配列で使える効率的な探索法
- ソート: 配列のソートには `sort()` が使えるが、比較関数を正しく書く必要がある
- スタックとキュー: 配列で実装可能（push/pop, push/shift）

```typescript
// 例：線形探索
function linearSearch<T>(array: T[], target: T): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

// 例：二分探索（ソート済み配列用）
function binarySearch(sortedArray: number[], target: number): number {
  let left = 0;
  let right = sortedArray.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (sortedArray[mid] === target) return mid;
    if (sortedArray[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
}

// 例：カスタムソート
const numbers = [5, 2, 8, 1, 4];
numbers.sort((a, b) => a - b); // 昇順: [1, 2, 4, 5, 8]
```

## 勉強の進め方

1. **各概念を一つずつ理解**: 一度にすべてを学ぼうとせず、各概念をじっくり理解
2. **実践的に学ぶ**: ドキュメントを読むだけでなく、コードを書いて試す
3. **デバッグを活用**: TypeScriptの型エラーはヒントとして活用
4. **繰り返し練習**: 一度解いた問題も別のアプローチで再度挑戦
5. **コードレビュー**: 自分のコードを見直し、改善点を探す

## 参考リソース

- [TypeScript公式ハンドブック](https://www.typescriptlang.org/docs/)
- [MDN JavaScript リファレンス](https://developer.mozilla.org/ja/docs/Web/JavaScript)
- [Big O 記法の解説](https://ja.wikipedia.org/wiki/%E8%A8%88%E7%AE%97%E8%A4%87%E9%9B%91%E6%80%A7%E7%90%86%E8%AB%96) 