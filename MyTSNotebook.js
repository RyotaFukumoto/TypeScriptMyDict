// letとconstの違いを説明するサンプルコード
// letは再代入可能、Constは再代入不可能
function letConst() {
    var a = 1;
    a = 2;
    console.log("let", a); // 2
    var b = 1;
    // b = 2; // error
    console.log("const", b);
}
letConst();
// constは再代入不可能だが、オブジェクトのプロパティは変更可能、可変オブジェクトは保護されない
function constObj() {
    var obj = { key: "value" };
    obj.key = "new value";
    console.log("const obj", obj); // { key: 'new value' }
    // obj = { key: "value" }; // error
}
constObj();
// constは再代入不可能だが、配列の要素は変更可能
function constArr() {
    var arr = [1, 2, 3];
    arr[0] = 4;
    console.log("const arr", arr); // [ 4, 2, 3 ]
    // arr = [1, 2, 3]; // error
    arr.push(4);
    console.log("const arr", arr); // [ 4, 2, 3, 4 ]
}
constArr();
// 変数宣言の型注釈
function typeAnnotation() {
    var num = 1;
    var str = "string";
    var bool = true;
    var arr1 = [1, 2, 3];
    var arr2 = [1, 2, 3];
    var obj1 = { key: "value" };
    var obj2 = { key: "value", key2: 1 };
    var obj3 = { key: "value" };
    var obj4 = { key: "value", key2: 1 };
    console.log(num, str, bool, arr1, arr2, obj1, obj2, obj3, obj4);
}
typeAnnotation();
// constの型注釈
function constTypeAnnotation() {
    var constNum = 1;
    var constStr = "string";
    var constBool = true;
    var constArr1 = [1, 2, 3];
    var constArr2 = [1, 2, 3];
    var constObj1 = { key: "value" };
    var constObj2 = { key: "value", key2: 1 };
    var constObj3 = { key: "value" };
    var constObj4 = { key: "value", key2: 1 };
    console.log(constNum, constStr, constBool, constArr1, constArr2, constObj1, constObj2, constObj3, constObj4);
}
constTypeAnnotation();
// 型推論
function typeInference() {
    var num1 = 1;
    var str1 = "string";
    var bool1 = true;
    var arr11 = [1, 2, 3];
    var obj11 = { key: "value" };
    // num1 = 'hello' // 型推論によりエラーになる
    // str1 = 1 // 型推論によりエラーになる
    // bool1 = 'hello' // 型推論によりエラーになる
    // arr11 = [1, 2, 'hello'] // 型推論によりエラーになる
    // obj11 = { key: 1 } // 型推論によりエラーになる
    console.log(num1, str1, bool1, arr11, obj11);
}
typeInference();
function constTypeInference() {
    var constNum1 = 1;
    var constStr1 = "string";
    var constBool1 = true;
    var constArr11 = [1, 2, 3];
    var constObj11 = { key: "value" };
    // constNum1 = 'hello' // 型推論によりエラーになる
    // constStr1 = 1 // 型推論によりエラーになる
    // constBool1 = 'hello' // 型推論によりエラーになる
    // constArr11 = [1, 2, 'hello'] // 型推論によりエラーになる
    // constObj11 = { key: 1 } // 型推論によりエラーになる
    console.log(constNum1, constStr1, constBool1, constArr11, constObj11);
}
constTypeInference();
// varは使わない、varの問題点
function varTest() {
    var x = 1;
    var x = 2; //後から再宣言できてしまう
    console.log('varTest', x); // 2
}
varTest();
// let、constは再宣言できない
function letTest() {
    var x = 1;
    // let x = 2; // error
    console.log('letTest', x); // 1
}
letTest();
function constTest() {
    var x = 1;
    // const x = 2; // error
    console.log('constTest', x); // 1
}
constTest();
// 変数の巻き上げ
// 変数宣言がスコープの先頭に移動すること
function hoistingTest() {
    console.log('hoisting', hoisting); // undefined
    var hoisting = 1;
}
hoistingTest();
// let、constは巻き上げが発生しない
function hoistingTest2() {
    // console.log('letHoisting', letHoisting); // tscコマンドでコンパル時にエラーになる
    var letHoisting = 1;
    console.log('letHoisting', letHoisting); // 1
    // console.log('constHoisting', constHoisting); // tscコマンドでコンパル時にエラーになる
    var constHoisting = 1;
    console.log('constHoisting', constHoisting); // 1
}
hoistingTest2();
// ブロックスコープ、varは関数スコープ、let、constはブロックスコープ
// varはブロックスコープを無視してしまう
function varBlockScope() {
    var x = 1;
    if (true) {
        console.log('varBlockIN ', x); // 1
        var x = 2;
    }
    console.log('varBlockOut', x);
}
varBlockScope();
// let、constはブロックスコープを守る
function letBlockScope() {
    var x = 1;
    if (true) {
        // console.log('letBlockIn', x); // error
        var x_1 = 2;
    }
    console.log('letBlockOut', x); // 1
}
letBlockScope();
// 型推論と動的型付け、TypeScript上ではエラーになるが、コンパイル後はエラーにならない
function dynamicType() {
    var x = 1; // xはnumber型となる
    x = "hello"; //x はstring型となる
    console.log(x.substring(1, 3));
}
