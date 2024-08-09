// 2-5

function optionalChaining() {
  interface User {
    name: string;
    social?: {
      facebook: boolean;
      twitter: boolean;
    }
  }
  let user: User;
  user = {
    name: 'Furukawa',
    social: {
      facebook: false,
      twitter: true
    }
  }
  console.log(user.social?.twitter);

  let user2: User;
  user2 = {
    name: 'Oono'
  }
  console.log(user2.social?.facebook);
}

optionalChaining();

function nonNullAssertionOperator() {
  interface User {
    name: string;
    social?: {
      facebook: boolean;
      twitter: boolean;
    }
  }

  function processUser(user?: User) {
    let s = user!.name;
  }
  // あくまでTypeScriptのコンパイラにエラーを無視するよう指示するだけ
  // 実行時にエラーが発生する可能性がある
}

nonNullAssertionOperator();

function typeGuard() {
  function addOne(value: number | string) {
    if (typeof value === 'string') {
      return Number(value) + 1;
    }
    // 以降はvalueはnumber型として扱われる
    return value + 1
  }

  console.log(addOne(10)); // 11
  console.log(addOne('20')); // 21

  type User = {
    info?: {
      name: string;
      age: number;
    }
  }
  let response = {};
  const user = (response as any) as User;

  // console.log(user.info.name); // コンパイルエラー
  if (user.info) {
    console.log(user.info.name);
  }
}

typeGuard();

function keyOfOeperator() {
  interface User {
    name: string;
    age: number;
    email: string;
  }
  type UserKey = keyof User; // 'name' | 'age' | 'email' というUnion型になる

  const key1: UserKey = 'name';
  // const key2: UserKey = 'phone'; // コンパイルエラー
  console.log(key1); // name
  
  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  const user: User = {
    name: 'Takuya',
    age: 36,
    email: 'test@example.com'
  }

  const userName = getProperty(user, 'name');
  console.log(userName); // Takuya
  // const userGender = getProperty(user, 'gender'); // コンパイルエラー
}

keyOfOeperator();

function indexType() {
  // オブジェクトのプロパティが可変の時、まとめて型を定義できる
  type SupportVersions = {
    [env: number]: boolean;
  }

  let versions: SupportVersions = {
    102: false,
    103: false,
    104: true,
    // 'v105': true // コンパイルエラー
  }

  console.table(versions);
}

indexType();

function readonlyType() {
  type User = {
    readonly name: string;
    readonly gender: string;
  }
  let user: User = {
    name: 'Kousei',
    gender: 'Male'
  }

  // user.gender = 'Female'; // コンパイルエラー

  // Readonly型を使うと全てのプロパティがreadonlyになる
  type User2 = {
    name: string;
    gender: string;
  }

  type UserReadOnly = Readonly<User2>;

  let user2: User2 = {
    name: 'Miyazono',
    gender: 'Male'
  }
  let userReadOnly: UserReadOnly = {
    name: 'Miyagawa',
    gender: 'Male'
  }
  user2.name = 'Koguma';
  // userReadOnly.name = 'Koguma'; // コンパイルエラー

  console.table(user2);

}

readonlyType();

function unknownType() {
  const x: unknown = 123;
  const y: unknown = 'Hello';

  // unknown型そのままではコンパイル時にエラーが発生する
  // console.log(y.toUpperCase()); // コンパイルエラー

  if (typeof x === 'number') {
    console.log(x.toFixed(1));
  }
  if (typeof y === 'string') {
    console.log(y.toLocaleLowerCase());
  }
}

unknownType();

// どうやらTSのバージョンが古いため、以下のコードはエラーになる
// 解消方法は調査中

// async function asyncAwait() {
//   function fetchFromServer(id: string): Promise<{success: boolean}> {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve({success: true});
//       }, 1000);
//     })
//   }

//   async function asyncFunc(): Promise<string> {
//     const result = await fetchFromServer('111');
//     return `The result: ${result.success}`;
//   }

//   (async () => {
//     const result = await asyncFunc();
//     console.log(result);
//   })();

//   // Promise として扱う場合
//   asyncFunc().then(result => console.log(result));
// }

// asyncAwait();