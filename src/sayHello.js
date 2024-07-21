function sayHello(firstName) {
    console.log('Hello ', firstName);
}
var firstName = 'John';
sayHello(firstName);
// error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
// let age: number = 25;
// sayHello(age);
// error TS2349: This expression is not callable.
// Type 'String' has no call signatures.
// const message = 'hello!';
// message();
function calc(isSum) {
    var a = 100;
    if (isSum) {
        var b = a + 1;
        return b;
    }
    // return b; // error TS2304: Cannot find name 'b'.
}
// const num: number = 100;
// num = 200; // error TS2588: Cannot assign to 'num' because it is a constant.
// プリミティブ型
var age = 36;
var isDone = false;
var color = '青';
var mynumber = '200';
mynumber = '二百';
// mynumber = 200; // error TS2322: Type 'number' is not assignable to type 'string'.
// 配列
var array = [];
array.push("Takuya");
// array.push(1); // error TS2345: Argument of type '1' is not assignable to parameter of type 'string'.
var mixedArray = ['foo', 1];
var mixedArrayU = ['foo', 1]; // Union Types
var mixedArrayT = ['foo', 1]; // Tuple Types
// オブジェクト型
var user = {
    name: 'Takuya',
    age: 36
};
console.log(user.name);
console.log(user.age);
// オブジェクト型 オプショナルなプロパティ
function printName(obj) {
    console.log(obj.first);
    console.log(obj.last ? obj.last : 'No Last Name');
}
printName({ first: 'Taro' });
printName({ first: 'Taro', last: 'Yamada' });
// any型
// 特定の値に対して型チェックの仕組みを適用したくない場合に利用
// 基本方針としてはanyを使用しないことが望ましい
var user2 = { firstName: "Kenta" };
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
function sayHello2(name) {
    return "Hello ".concat(name);
}
console.log(sayHello2("Yuta"));
// オプショナルな引数
function sayHello3(name, greeting) {
    return "".concat(greeting, " ").concat(name);
}
console.log(sayHello3('Makoto'));
console.log(sayHello3('Makoto', 'Hi'));
// 関数を引数に取る関数
function printName2(firstName, formatter) {
    console.log(formatter(firstName));
}
function formatName(name) {
    return "".concat(name, " san");
}
printName2('Nagisa', formatName);
// arrow function
// ( 引数名: 引数の型 ): 戻り値の型 => JavaScriptの式
// eg. let sayHello = (name: string): string => `Hello ${name}`;
function genBirdsInfo(name) {
    return name.split(',');
}
// 関数の型を利用
function singBirds(birdInfo) {
    return birdInfo('hato, kiji')[0] + ' piyo piyo';
}
console.log(singBirds(genBirdsInfo));
// console.log(singBirds('dobato')); // 型が合わないためエラー
// tsc --strictNullChecks sayHello.ts
