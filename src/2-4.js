// 2-4
// Enum型
function eenum() {
    var Direction;
    (function (Direction) {
        Direction[Direction["Up"] = 0] = "Up";
        Direction[Direction["Down"] = 1] = "Down";
        Direction[Direction["Left"] = 2] = "Left";
        Direction[Direction["Right"] = 3] = "Right";
    })(Direction || (Direction = {}));
    // enum Direction を参照
    // Enum型はEnum型は定義された順番に沿って０から数字が
    // 自動的にインクリメントされて設定される
    var direction = Direction.Left;
    console.log(direction);
    // enum を代入した変数に別の型の値を代入しようとするとエラー
    // direction = 'Left';
    // 文字列ベースのEnum
    var Direction2;
    (function (Direction2) {
        Direction2["Up"] = "UP";
        Direction2["Down"] = "DOWN";
        Direction2["Left"] = "LEFT";
        Direction2["Right"] = "RIGHT";
    })(Direction2 || (Direction2 = {}));
    // 例：APIのパラメータとして文字列が渡されたケースを想定
    var value = 'DOWN';
    var enumValue = value;
    if (enumValue === Direction2.Down) {
        console.log('Down is selected.');
    }
}
eenum();
function generic() {
    // ジェネリック型
    // クラスや関数において、その中で使う型を抽象化し
    // 外部から具体的な型を指定できる機能
    var Queue = /** @class */ (function () {
        function Queue() {
            // 内部にTの型の配列を初期化
            this.array = [];
        }
        Queue.prototype.push = function (item) {
            this.array.push(item);
        };
        Queue.prototype.pop = function () {
            return this.array.shift();
        };
        return Queue;
    }());
    var queue = new Queue();
    queue.push(111);
    queue.push(112);
    console.log(queue.pop());
    // queue.push('hoge'); // number型ではないのでコンパイルエラー
    var str = 'fuga';
    // str = queue.pop(); // strはnumber型ではないのでコンパイルエラー
}
generic();
function unionAndIntersction() {
    // Union = 和集合
    // Intersection = 積集合
    // Union
    function printId(id) {
        console.log(id);
    }
    printId(11);
    printId('22');
    function printId2(id) {
        console.log(id);
    }
    printId2(33);
    printId2('44');
    // OK
    var id = {
        id: '111',
        name: 'Minato'
    };
    // OK
    var contact = {
        name: 'Minato',
        email: 'test@test.com',
        phone: '090-1111-1111'
    };
    console.log(id);
    console.log(contact);
    // OK
    var employee = {
        id: '222',
        name: 'Sasaki',
        email: 'test@test',
        phone: '080-0000-0000'
    };
    console.log(employee);
    // NG: idがないため
    // const employeeContact: Employee = {
    //   name: 'Sasaki',
    //   email: 'test@test',
    //   phone: '080-0000-0000'
    // }
}
unionAndIntersction();
