// 基本的な型の機能
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 型推論
function katasuiron() {
    var age = 10;
    // console.log(age.length); // Property 'length' does not exist on type '10'.
    // age は number 型として推論されるため、lengthプロパティーはない
    var user = {
        name: 'Isogai',
        age: 15
    };
    // console.log(user.age.length); // Property 'length' does not exist on type 'number'.
    console.log(user.name, 'length:', user.name.length);
    // 関数の戻り値の型推論
    function getUser() {
        return {
            name: 'Okuda',
            age: 15
        };
    }
    var user2 = getUser();
    // console.log(user2.age.length); // Property 'length' does not exist on type 'number'.
    console.log(user2.name, 'length:', user2.name.length);
    // 配列の型推論
    var names = ['Takuya', 'Yuta', 'Makoto'];
    names.forEach(function (name) {
        // string型として扱われるので、関数名を間違えている呼び出しはコンパイル時にエラーになる
        // console.log(name.toUppercase()) // プロパティ 'toUppercase' は型 'string' に存在していません。
        console.log(name.toUpperCase());
    });
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
    var hoge = 'test';
    var fuga = hoge;
    // コンパイル時にはエラーにならないが、実行時にエラーになる
    // console.log(fuga.toFixed(2));
}
kataAssertion();
function kataAriase() {
    function printPoint(point) {
        console.log("x\u5EA7\u6A19\u306F ".concat(point.x, " \u3067\u3059"));
        console.log("y\u5EA7\u6A19\u306F ".concat(point.y, " \u3067\u3059"));
    }
    printPoint({ x: 100, y: 200 });
    function printName(firstName, formatter) {
        console.log(formatter(firstName));
    }
    var upperCaseFormatter = function (name) { return name.toUpperCase(); };
    printName('Michinobu', upperCaseFormatter);
    // 上記エイリアスを指定して、
    // 画面に表示する文字を定義するオブジェクトのキーと値を以下のように定義できる
    var labels = {
        topTitle: 'トップページのタイトルです',
        topSubTitle: 'トップページのサブタイトルです',
        topFeature1: 'トップページの機能１です',
        topFeature2: 'トップページの機能２です'
    };
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
    function printPoint(point) {
        console.log("x\u5EA7\u6A19\u306F ".concat(point.x, " \u3067\u3059"));
        console.log("y\u5EA7\u6A19\u306F ".concat(point.y, " \u3067\u3059"));
        console.log("z\u5EA7\u6A19\u306F ".concat(point.z, " \u3067\u3059"));
    }
    // 引数のオブジェクトにzが存在しないためコンパイル時にエラーになる
    // printPoint({ x: 100, y: 200 });
    // 問題なく動作します
    printPoint({ x: 100, y: 200, z: 300 });
    var MyPoint = /** @class */ (function () {
        function MyPoint() {
        }
        return MyPoint;
    }());
    var cc = {
        color: '赤',
        radius: 10
    };
}
iinterface();
function klass() {
    // class クラス名 {
    //   フィールド1: 型1;
    //   フィールド2: 型2;
    // }
    var Point = /** @class */ (function () {
        // 引数がない場合の初期値を指定（コンストラクタ)
        function Point(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            this.x = x;
            this.y = y;
        }
        // 戻り値がない関数を定義するためにvoidを指定する
        Point.prototype.moveX = function (n) {
            this.x += n;
        };
        Point.prototype.moveY = function (n) {
            this.y += n;
        };
        return Point;
    }());
    var point = new Point();
    point.moveX(10);
    console.log("".concat(point.x, ", ").concat(point.y)); // 10, 0
    // extends
    var Point3D = /** @class */ (function (_super) {
        __extends(Point3D, _super);
        function Point3D(x, y, z) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            // 継承元のコンストラクタを呼び出す
            var _this = _super.call(this, x, y) || this;
            _this.z = z;
            return _this;
        }
        Point3D.prototype.moveZ = function (n) {
            this.z += n;
        };
        return Point3D;
    }(Point));
    var point3D = new Point3D();
    // 継承元のメソッドを呼び出すことができる
    point3D.moveX(20);
    point3D.moveZ(50);
    console.log("".concat(point3D.x, ", ").concat(point3D.y, ", ").concat(point3D.z)); // 20, 0, 50
    var User = /** @class */ (function () {
        function User() {
            this.name = '';
            this.age = 0;
        }
        // インターフェースに定義されているメソッドを実装しないと
        // コンパイル時にエラーになる
        User.prototype.sayHello = function () {
            return "\u3053\u3093\u306B\u3061\u306F\u3001\u79C1\u306F".concat(this.name, "\u3001").concat(this.age, "\u6B73\u3067\u3059");
        };
        return User;
    }());
    var user = new User();
    user.name = 'Yuhei';
    user.age = 28;
    console.log(user.sayHello());
    // アクセス修飾子
    var BasePoint3D = /** @class */ (function () {
        function BasePoint3D() {
        }
        return BasePoint3D;
    }());
    // インスタンス化を行なった場合のアクセス制御の例
    var basePoint = new BasePoint3D();
    basePoint.x; // OK
    // basePoint.y: // コンパイルエラー
    // basePoint.z; // コンパイルエラー
    var ChildPoint = /** @class */ (function (_super) {
        __extends(ChildPoint, _super);
        function ChildPoint() {
            var _this = _super.call(this) || this;
            _this.x; // OK
            // this.y; // コンパイルエラー
            _this.z; // OK
            return _this;
        }
        return ChildPoint;
    }(BasePoint3D));
}
klass();
