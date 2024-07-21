// 基本的な型の機能
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
    var myCanvas = document.getElementById('main_canvas');
    console.log(myCanvas.width);
}
kataAssertion();
