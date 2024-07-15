function sayHello(firstName: string) {
  console.log('Hello ', firstName);
}

let firstName: string = 'John';
sayHello(firstName);

// error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
// let age: number = 25;
// sayHello(age);

// error TS2349: This expression is not callable.
// Type 'String' has no call signatures.
// const message = 'hello!';
// message();

function calc(isSum: boolean) {
  let a = 100;
  if (isSum) {
    let b = a + 1;
    return b;
  }

  // return b; // error TS2304: Cannot find name 'b'.
}

// const num: number = 100;
// num = 200; // error TS2588: Cannot assign to 'num' because it is a constant.

// プリミティブ型
let age: number = 36;
let isDone: boolean = false;
let color: string = '青';

let mynumber: string = '200';
mynumber = '二百';
// mynumber = 200; // error TS2322: Type 'number' is not assignable to type 'string'.

// 配列
const array: string[] = [];
array.push("Takuya");
// array.push(1); // error TS2345: Argument of type '1' is not assignable to parameter of type 'string'.

const mixedArray = ['foo', 1];
const mixedArrayU: (String | number)[] = ['foo', 1]; // Union Types
const mixedArrayT: [string, number] = ['foo', 1]; // Tuple Types

// オブジェクト型
const user: { name: string, age: number } = {
  name: 'Takuya',
  age: 36
};

console.log(user.name);
console.log(user.age);

// オブジェクト型 オプショナルなプロパティ
function printName(obj: { first: string, last?: string }) {
  console.log(obj.first);
  console.log(obj.last ? obj.last : 'No Last Name');
}

printName({ first: 'Taro' });
printName({ first: 'Taro', last: 'Yamada' });

// any型
// 特定の値に対して型チェックの仕組みを適用したくない場合に利用
// 基本方針としてはanyを使用しないことが望ましい
let user2: any = { firstName: "Kenta"};

// 以下の行のコードはいずれもコンパイルエラーが起こらない
// user2.hello();
// user2();
// user2.age = 100;
// user2 = 'hello';

// 他の型への代入を行ってもエラーが起きない
// const n: number = user2;

// 関数
// function sample (引数1: 型1, 引数2: 型2): 戻り値 {
//   // ...
// }
function sayHello2(name: string): string {
  return `Hello ${name}`;
}

console.log(sayHello2("Yuta"));

// オプショナルな引数
function sayHello3(name: string, greeting?: string): string {
  return `${greeting} ${name}`;
}

console.log(sayHello3('Makoto'));
console.log(sayHello3('Makoto', 'Hi'));

// tsc --strictNullChecks sayHello.ts