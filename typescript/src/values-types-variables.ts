// jsの変数宣言には`let`と`const`とがある
// constは再代入が禁止
// 基本的にconstを使うといいらしい

let x = 1;
x = 2;

const y = 1;
// y = 2; <- エディタに怒られる



// ただ、「constといえど可変(ミュータブル)なオブジェクトのプロパティを不変にする保護効果は無い」らしい。ちょっと何言ってるかわからない
const obj = {a: 1}; // 辞書型
// obj = {a: 2}; <- ダメ
obj.a = 2; // プロパティの変更はできる

const arr = [1, 2]; // 配列
// arr = [3, 4]; <- ダメ
arr.push(3); // 配列に要素を追加はできる



// 型注釈(型アノテーション)
const num: number = 123;
// const num: number = "aaa"; <- ダメ



// varは使っちゃダメ
// (同名の変数を複数回宣言できる・「変数の巻き上げ」という概念のせいで色々エラったり事故ったりする、といった理由による)


// 型推論
let z = 1;
// z = "hello" <- number型だと推測されているので、怒られる

// 型推論は、型宣言をしなくても静的型付けとして振舞ってくれる、という意味
// 動的型付けのように、後々で型を変更可能とかいうワケではない



// 型ども
const isOk: boolean = true;
const count: number = 123;
const message: string = "Hello";

const n: null = null; // 箱はあるが中身が空っぽ
const u: undefined = undefined; // 箱の中身が空っぽ
// undefinedに統一する方が楽/無難



// NaNは等号比較で常に`false`を吐く



// テンプレートリテラル: バッククォートで囲んだ文字列のこと

// 改行は、テンプレートリテラルの中なら、実際に改行すればいける
// console.log(`aaa
// aaa`);

// console.log(`aaa\naaa`); // <- これもいける

// console.log("aa
// aa") <- ""とか''ではダメ


// テンプレートリテラルでは、文字列に変数や式を含めて扱える
const a: number = 10;
const b: number = 2;
// console.log(`a = ${a}`)
// console.log(`a * b = ${a * b}`)
