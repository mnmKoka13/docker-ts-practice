// 2-5
function optionalChaining() {
    var _a, _b;
    var user;
    user = {
        name: 'Furukawa',
        social: {
            facebook: false,
            twitter: true
        }
    };
    console.log((_a = user.social) === null || _a === void 0 ? void 0 : _a.twitter);
    var user2;
    user2 = {
        name: 'Oono'
    };
    console.log((_b = user2.social) === null || _b === void 0 ? void 0 : _b.facebook);
}
optionalChaining();
function nonNullAssertionOperator() {
    function processUser(user) {
        var s = user.name;
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
    var response = {};
    var user = response;
    // console.log(user.info.name); // コンパイルエラー
    if (user.info) {
        console.log(user.info.name);
    }
}
typeGuard();
