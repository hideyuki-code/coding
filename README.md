# TypeScript アルゴリズム入門 (A問題集)

このリポジトリは、TypeScriptの基本とアルゴリズムの基礎を学ぶためのA問題（初級レベル）集です。

## 環境セットアップ

```bash
# 依存関係のインストール
npm install
```

## 問題一覧

### 基本型と演算

1. **数値演算**: 配列の合計と偶数の個数を求める
   - 配列の基本操作、reduce、filter
   - `npm run problem1`

2. **文字列操作**: 文字列の反転と母音カウント
   - 文字列操作、配列変換、filter
   - `npm run problem2`

3. **再帰と繰り返し**: フィボナッチ数列
   - 再帰、メモ化、反復処理
   - `npm run problem3`

4. **論理演算**: 数値の2進数表現とビットカウント
   - ビット演算、2進数変換
   - `npm run problem4`

### 基本データ構造

5. **オブジェクト操作**: 人物情報の検索とフィルタリング
   - オブジェクト操作、プロパティアクセス
   - `npm run problem5`

6. **マップとセット**: 文字列内の文字出現回数
   - Map、Set、反復処理
   - `npm run problem6`

7. **配列変換**: 配列の平坦化と変換
   - flatMap、map、reduce の活用
   - `npm run problem7`

### TypeScript特有の機能

8. **型の活用**: ジェネリック関数の実装
   - ジェネリック型、型制約
   - `npm run problem8`

9. **インターフェース**: 形状に基づく面積計算
   - インターフェース、抽象クラス
   - `npm run problem9`

10. **共用型と型ガード**: データ検証関数
    - 共用型、型ガード、型の絞り込み
    - `npm run problem10`

### アルゴリズム基礎

11. **検索アルゴリズム**: 線形探索と二分探索
    - 検索アルゴリズム、計算量
    - `npm run problem11`

12. **ソート**: バブルソートの実装
    - ソートアルゴリズム、比較関数
    - `npm run problem12`

13. **簡易データ構造**: スタックとキューの実装
    - クラス設計、データ構造
    - `npm run problem13`

14. **文字列パターン**: 回文判定
    - 文字列アルゴリズム、効率的実装
    - `npm run problem14`

15. **シンプルな計算**: 最大公約数と最小公倍数
    - ユークリッドの互除法、数学的アルゴリズム
    - `npm run problem15`

## 学習の進め方

1. 各問題のテンプレートが `solutions` ディレクトリにあります
2. `npm run problemX` (Xは問題番号) で実行できます
3. `npm test` でテストが実行できます
4. まずは問題を自分で解いてみてから、テストに合格するようにコードを修正してください

## 効果的な学習のために

- コードの「動作」だけでなく「なぜそう書くのか」を考える
- TypeScriptの型システムを積極的に活用する
- 一度解いた問題でも、より良い書き方がないか検討する
- エッジケースを考慮する習慣をつける

## リソース

- [TypeScript 公式ドキュメント](https://www.typescriptlang.org/docs/)
- [JavaScript 配列メソッド](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [アルゴリズムとデータ構造の基礎](https://ja.wikipedia.org/wiki/アルゴリズムとデータ構造) 