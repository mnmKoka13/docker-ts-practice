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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
function keyOfOeperator() {
    var key1 = 'name';
    // const key2: UserKey = 'phone'; // コンパイルエラー
    console.log(key1); // name
    function getProperty(obj, key) {
        return obj[key];
    }
    var user = {
        name: 'Takuya',
        age: 36,
        email: 'test@example.com'
    };
    var userName = getProperty(user, 'name');
    console.log(userName); // Takuya
    // const userGender = getProperty(user, 'gender'); // コンパイルエラー
}
keyOfOeperator();
function indexType() {
    var versions = {
        102: false,
        103: false,
        104: true,
        // 'v105': true // コンパイルエラー
    };
    console.table(versions);
}
indexType();
function readonlyType() {
    var user = {
        name: 'Kousei',
        gender: 'Male'
    };
    var user2 = {
        name: 'Miyazono',
        gender: 'Male'
    };
    var userReadOnly = {
        name: 'Miyagawa',
        gender: 'Male'
    };
    user2.name = 'Koguma';
    // userReadOnly.name = 'Koguma'; // コンパイルエラー
    console.table(user2);
}
readonlyType();
function unknownType() {
    var x = 123;
    var y = 'Hello';
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
function asyncAwait() {
    return __awaiter(this, void 0, void 0, function () {
        function fetchFromServer(id) {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve({ success: true });
                }, 1000);
            });
        }
        function asyncFunc() {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, fetchFromServer('111')];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, "The result: ".concat(result.success)];
                    }
                });
            });
        }
        var _this = this;
        return __generator(this, function (_a) {
            (function () { return __awaiter(_this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, asyncFunc()];
                        case 1:
                            result = _a.sent();
                            console.log(result);
                            return [2 /*return*/];
                    }
                });
            }); })();
            // Promise として扱う場合
            asyncFunc().then(function (result) { return console.log(result); });
            return [2 /*return*/];
        });
    });
}
asyncAwait();
