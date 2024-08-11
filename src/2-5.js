// 2-5
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function optionalChaining() {
    var _a, _b;
    let user;
    user = {
        name: 'Furukawa',
        social: {
            facebook: false,
            twitter: true
        }
    };
    console.log((_a = user.social) === null || _a === void 0 ? void 0 : _a.twitter);
    let user2;
    user2 = {
        name: 'Oono'
    };
    console.log((_b = user2.social) === null || _b === void 0 ? void 0 : _b.facebook);
}
optionalChaining();
function nonNullAssertionOperator() {
    function processUser(user) {
        let s = user.name;
    }
    // あくまでTypeScriptのコンパイラにエラーを無視するよう指示するだけ
    // 実行時にエラーが発生する可能性がある
}
nonNullAssertionOperator();
function typeGuard() {
    function addOne(value) {
        if (typeof value === 'string') {
            return Number(value) + 1;
        }
        // 以降はvalueはnumber型として扱われる
        return value + 1;
    }
    console.log(addOne(10)); // 11
    console.log(addOne('20')); // 21
    let response = {};
    const user = response;
    // console.log(user.info.name); // コンパイルエラー
    if (user.info) {
        console.log(user.info.name);
    }
}
typeGuard();
function keyOfOeperator() {
    const key1 = 'name';
    // const key2: UserKey = 'phone'; // コンパイルエラー
    console.log(key1); // name
    function getProperty(obj, key) {
        return obj[key];
    }
    const user = {
        name: 'Takuya',
        age: 36,
        email: 'test@example.com'
    };
    const userName = getProperty(user, 'name');
    console.log(userName); // Takuya
    // const userGender = getProperty(user, 'gender'); // コンパイルエラー
}
keyOfOeperator();
function indexType() {
    let versions = {
        102: false,
        103: false,
        104: true,
        // 'v105': true // コンパイルエラー
    };
    console.table(versions);
}
indexType();
function readonlyType() {
    let user = {
        name: 'Kousei',
        gender: 'Male'
    };
    let user2 = {
        name: 'Miyazono',
        gender: 'Male'
    };
    let userReadOnly = {
        name: 'Miyagawa',
        gender: 'Male'
    };
    user2.name = 'Koguma';
    // userReadOnly.name = 'Koguma'; // コンパイルエラー
    console.table(user2);
}
readonlyType();
function unknownType() {
    const x = 123;
    const y = 'Hello';
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
function asyncAwait() {
    return __awaiter(this, void 0, void 0, function* () {
        function fetchFromServer(id) {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({ success: true });
                }, 1000);
            });
        }
        function asyncFunc() {
            return __awaiter(this, void 0, void 0, function* () {
                const result = yield fetchFromServer('111');
                return `The result: ${result.success}`;
            });
        }
        (() => __awaiter(this, void 0, void 0, function* () {
            const result = yield asyncFunc();
            console.log(result);
        }))();
        // Promise として扱う場合
        asyncFunc().then(result => console.log(result));
    });
}
asyncAwait();
