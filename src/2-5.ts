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