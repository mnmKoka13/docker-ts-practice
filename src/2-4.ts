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

function literal() {
  // リテラル型
  // 決まった文字列や数値しか入らない方という制御が可能
  // 変数:許可するデータ1 | 許可するデータ2 | ...
  let postStatus: 'draft' | 'published' | 'deleted';
  postStatus = 'draft'; // OK
  // postStatus = 'drafts'; // 型宣言にない文字列が割り当てられているためコンパイルエラー

  function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
  }
  console.log(compare('a', 'b'));
}

literal();

function typeNever() {
  // never型
  // 決して発生しない値の種類を表す
  // 戻り値の型をnever型にすることで、関数が例外をスローすることを表現できる
  function error(message: string): never {
    throw new Error(message);
  }

  function foo(x: string | number | number[]): boolean {
    if (typeof x === 'string') {
      return true;
    } else if (typeof x === 'number') {
      return false;
    }
    // never を利用することで明示的に値が返らないことを示す
    // never を使用しないとTypeScriptはエラーを出す
    return error('Never happens');
  }

  console.log(foo('a'));

  enum PageType {
    ViewProfile,
    EditProfile,
    ChangePassword
  }

  const getTitleText = (type: PageType) => {
    switch (type) {
      case PageType.ViewProfile:
        return 'Setting';
      case PageType.EditProfile:
        return 'Edit Profile';
      case PageType.ChangePassword:
        return 'Change Password';
      default:
        // never型を返すことで、全てのケースを網羅していることを示す
        const wrongType: never = type;
        throw new Error(`${wrongType} is not in PageType.`);
    }
  }

  const type = PageType.ViewProfile;
  console.log(getTitleText(type));
}

typeNever();