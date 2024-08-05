// 2-4

// Enum型
function eenum() {

  enum Direction {
    Up,
    Down,
    Left,
    Right
  }

  // enum Direction を参照
  // Enum型はEnum型は定義された順番に沿って０から数字が
  // 自動的にインクリメントされて設定される
  let direction: Direction = Direction.Left;
  console.log(direction);

  // enum を代入した変数に別の型の値を代入しようとするとエラー
  // direction = 'Left';

  // 文字列ベースのEnum
  enum Direction2 {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
  }

  // 例：APIのパラメータとして文字列が渡されたケースを想定
  const value = 'DOWN';
  const enumValue = value as Direction2;

  if (enumValue === Direction2.Down) {
    console.log('Down is selected.');
  }
}

eenum();

function generic() {
  // ジェネリック型
  // クラスや関数において、その中で使う型を抽象化し
  // 外部から具体的な型を指定できる機能
  class Queue<T> {
    // 内部にTの型の配列を初期化
    private array: T[] = [];

    push(item: T) {
      this.array.push(item);
    }

    pop(): T | undefined {
      return this.array.shift();
    }
  }

  const queue = new Queue<number>();
  queue.push(111);
  queue.push(112);
  console.log(queue.pop());
  // queue.push('hoge'); // number型ではないのでコンパイルエラー

  let str = 'fuga';
  // str = queue.pop(); // strはnumber型ではないのでコンパイルエラー
}

generic();

function unionAndIntersction() {
  // Union = 和集合
  // Intersection = 積集合

  // Union
  function printId(id: number | string) {
    console.log(id);
  }
  printId(11);
  printId('22');

  // 型エイリアスとして定義できる
  type Id = number | string;

  function printId2(id: Id) {
    console.log(id);
  }
  printId2(33);
  printId2('44');

  // 和集合による新たなUnion型の定義を行う
  type Identity = {
    id: number | string;
    name: string;
  }
  type Contact = {
    name: string;
    email: string;
    phone: string;
  }

  // Identity もしくは contact の型を受け取ることが可能
  type IdentityOrContact = Identity | Contact;

  // OK
  const id: IdentityOrContact = {
    id: '111',
    name: 'Minato'
  }

  // OK
  const contact: IdentityOrContact = {
    name: 'Minato',
    email: 'test@test.com',
    phone: '090-1111-1111'
  }

  console.log(id);
  console.log(contact);

  // Intersection
  // IdentityとContactの両方のプロパティがマージされる
  type Employee = Identity & Contact;

  // OK
  const employee: Employee = {
    id: '222',
    name: 'Sasaki',
    email: 'test@test',
    phone: '080-0000-0000'
  }

  console.log(employee);

  // NG: idがないため
  // const employeeContact: Employee = {
  //   name: 'Sasaki',
  //   email: 'test@test',
  //   phone: '080-0000-0000'
  // }
}

unionAndIntersction();