// 基本的な型の機能

// 型推論
function katasuiron () {
  const age = 10;
  // console.log(age.length); // Property 'length' does not exist on type '10'.
  // age は number 型として推論されるため、lengthプロパティーはない
  
  const user = {
    name: 'Isogai',
    age: 15
  }
  
  // console.log(user.age.length); // Property 'length' does not exist on type 'number'.
  console.log(user.name, 'length:', user.name.length);


  // 関数の戻り値の型推論
  function getUser() {
    return {
      name: 'Okuda',
      age: 15
    }
  }

  const user2 = getUser();

  // console.log(user2.age.length); // Property 'length' does not exist on type 'number'.
  console.log(user2.name, 'length:', user2.name.length);

  // 配列の型推論
  const names = ['Takuya', 'Yuta', 'Makoto'];

  names.forEach((name) => {
    // string型として扱われるので、関数名を間違えている呼び出しはコンパイル時にエラーになる
    // console.log(name.toUppercase()) // プロパティ 'toUppercase' は型 'string' に存在していません。
    console.log(name.toUpperCase());
  })

  // 代入する先の変数の値の型が決まっている際に、
  // 代入する値と型が一致しない場合エラーになる型推論機能
  // window.confirm = () => {
  //   // window.confirm 関数の返り値は boolean であることをTSは知っているため
  //   // boolean を return しない限りエラーになる
  //   console.log('confirm関数');
  // }
}

katasuiron();

// 型アサーション
function kataAssertion() {
  // 次のコードはJSではエラーにならないが、TSではエラーになる
  // const myCanvas = document.getElementById('main_canvas');
  // console.log(myCanvas.width);
  // error TS18047: 'myCanvas' is possibly 'null'.
  // error TS2339: Property 'width' does not exist on type 'HTMLElement'.

  const hoge: any = 'test';
  const fuga: number = hoge as number;
  // コンパイル時にはエラーにならないが、実行時にエラーになる
  // console.log(fuga.toFixed(2));
}

kataAssertion();

function kataAriase() {

  // 型エイリアス
  // type 型名 = 型
  type Name = string;
  
  // xとyの座標プロパティを持つPointという型エイリアスを定義する例
  type Point = {
    x: number;
    y: number;
  }
  
  function printPoint(point: Point) {
    console.log(`x座標は ${point.x} です`);
    console.log(`y座標は ${point.y} です`);
  }
  
  printPoint({ x: 100, y: 200 });
  // 型が合っていてもプロパティ名が異なるとエラーになる
  // printPoint({ z: 100, t: 200});
  
  // 関数自体の型もエイリアスとして定義できる
  type Formatter = (a: string) => string;
  
  function printName(firstName: string, formatter: Formatter) {
    console.log(formatter(firstName));
  }

  const upperCaseFormatter: Formatter = (name: string) => name.toUpperCase();

  printName('Michinobu', upperCaseFormatter);

  // オブジェクトのキー名を明記せずに型エイリアスを定義できる
  // { [] : 型名 }
  type Label = {
    [key: string]: string;
  }

  // 上記エイリアスを指定して、
  // 画面に表示する文字を定義するオブジェクトのキーと値を以下のように定義できる
  const labels: Label = {
    topTitle: 'トップページのタイトルです',
    topSubTitle: 'トップページのサブタイトルです',
    topFeature1: 'トップページの機能１です',
    topFeature2: 'トップページの機能２です'
  }

  console.log(labels);

  // 値部分の型が合わないためエラー
  // const hoge: Label = {
  //   message: 100
  // }
}

kataAriase();

// インターフェース 
function iinterface() {
  // interface 型名 {
  //   プロパティ１: 型１;
  //   プロパティ２: 型２;
  // }

  interface Point {
    x: number;
    y: number;
  }

  function printPoint(point: Point) {
    console.log(`x座標は ${point.x} です`);
    console.log(`y座標は ${point.y} です`);
    console.log(`z座標は ${point.z} です`);
  }

  // このようにインターフェースは後から拡張可能
  interface Point {
    z: number;
  }

  // 引数のオブジェクトにzが存在しないためコンパイル時にエラーになる
  // printPoint({ x: 100, y: 200 });

  // 問題なく動作します
  printPoint({ x: 100, y: 200, z: 300 });

  // クラスがインターフェースをimplementsした際に、zが存在しないため
  // コンパイル時にエラーになる
  // class MyPoint implements Point {
  //   x: number;
  //   y: number;
  // }

  interface Point2 {
    x: number;
    y: number;
    z?: number; // オプショナルなプロパティ
  }

  class MyPoint implements Point2 {
    x: number;
    y: number;
  }

  // extends
  interface Coloful {
    color: string;
  }

  interface Circle {
    radius: number;
  }
  // 複数のインターフェースを継承して新たなインターフェースを定義できる
  interface ColofulCircle extends Coloful, Circle {}

  const cc: ColofulCircle = {
    color: '赤',
    radius: 10
  }
}

iinterface();

function klass() {
  // class クラス名 {
  //   フィールド1: 型1;
  //   フィールド2: 型2;
  // }

  class Point {
    x: number;
    y: number;

    // 引数がない場合の初期値を指定（コンストラクタ)
    constructor(x: number = 0, y: number = 0) {
      this.x = x;
      this.y = y;
    }

    // 戻り値がない関数を定義するためにvoidを指定する
    moveX(n: number): void {
      this.x += n;
    }

    moveY(n: number): void {
      this.y += n;
    }
  }

  const point = new Point();
  point.moveX(10);
  console.log(`${point.x}, ${point.y}`); // 10, 0

  // extends
  class Point3D extends Point {
    z: number;

    constructor(x: number = 0, y: number = 0, z: number = 0) {
      // 継承元のコンストラクタを呼び出す
      super(x, y);
      this.z = z;
    }

    moveZ(n: number): void {
      this.z += n;
    }
  }

  const point3D = new Point3D();
  // 継承元のメソッドを呼び出すことができる
  point3D.moveX(20);
  point3D.moveZ(50);
  console.log(`${point3D.x}, ${point3D.y}, ${point3D.z}`); // 20, 0, 50

  // インターフェースに対してimplementsを利用することで
  // クラスに対する実装の強制が可能
  interface IUser {
    name: string;
    age: number;
    sayHello: () => string; // 引数なしで文字列を返す
  }

  class User implements IUser {
    name: string;
    age; number;

    constructor() {
      this.name = '';
      this.age = 0;
    }

    // インターフェースに定義されているメソッドを実装しないと
    // コンパイル時にエラーになる
    sayHello(): string {
      return `こんにちは、私は${this.name}、${this.age}歳です`;
    }
  }

  const user = new User();
  user.name = 'Yuhei';
  user.age = 28;
  console.log(user.sayHello());

  // アクセス修飾子
  class BasePoint3D {
    public x: number;
    private y: number;
    protected z: number;
  }

  // インスタンス化を行なった場合のアクセス制御の例
  const basePoint = new BasePoint3D();
  basePoint.x; // OK
  // basePoint.y: // コンパイルエラー
  // basePoint.z; // コンパイルエラー

  class ChildPoint extends BasePoint3D {
    constructor() {
      super();
      this.x; // OK
      // this.y; // コンパイルエラー
      this.z; // OK
    }
  }
}

klass();