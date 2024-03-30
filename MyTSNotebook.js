// letとconstの違いを説明するサンプルコード
// letは再代入可能、Constは再代入不可能
var a = 1;
a = 2;
console.log("let", a); // 2
var b = 1;
// b = 2; // error
console.log("const", b);
// constは再代入不可能だが、オブジェクトのプロパティは変更可能、可変オブジェクトは保護されない
var obj = { key: "value" };
obj.key = "new value";
console.log("const obj", obj); // { key: 'new value' }
// obj = { key: "value" }; // error
// constは再代入不可能だが、配列の要素は変更可能
var arr = [1, 2, 3];
arr[0] = 4;
console.log("const arr", arr); // [ 4, 2, 3 ]
// arr = [1, 2, 3]; // error
arr.push(4);
console.log("const arr", arr); // [ 4, 2, 3, 4 ]
// 変数宣言の型注釈
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
// 型推論
var num1 = 1;
var str1 = "string";
var bool1 = true;
var arr11 = [1, 2, 3];
var obj11 = { key: "value" };
console.log(num1, str1, bool1, arr11, obj11);
var constNum1 = 1;
var constStr1 = "string";
var constBool1 = true;
var constArr11 = [1, 2, 3];
var constObj11 = { key: "value" };
console.log(constNum1, constStr1, constBool1, constArr11, constObj11);
// varは使わない、varの問題点
function varTest() {
    var x = 1;
    var x = 2; //後から再宣言できてしまう
    console.log('varTest', x); // 2
}
varTest();
