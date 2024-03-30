// letとconstの違いを説明するサンプルコード
// letは再代入可能、Constは再代入不可能
let a = 1;
a = 2;
console.log("let", a); // 2

const b = 1;
// b = 2; // error
console.log("const", b);

// constは再代入不可能だが、オブジェクトのプロパティは変更可能、可変オブジェクトは保護されない
const obj = { key: "value" };
obj.key = "new value";
console.log("const obj", obj); // { key: 'new value' }

// obj = { key: "value" }; // error


// constは再代入不可能だが、配列の要素は変更可能
const arr = [1, 2, 3];
arr[0] = 4;
console.log("const arr", arr); // [ 4, 2, 3 ]

// arr = [1, 2, 3]; // error

arr.push(4);
console.log("const arr", arr); // [ 4, 2, 3, 4 ]


// 変数宣言の型注釈
let num: number = 1;
let str: string = "string";
let bool: boolean = true;
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];
let obj1: { key: string } = { key: "value" };
let obj2: { key: string, key2: number } = { key: "value", key2: 1 };
let obj3: { key: string, key2?: number } = { key: "value" };
let obj4: { key: string, key2?: number } = { key: "value", key2: 1 };
console.log(num, str, bool, arr1, arr2, obj1, obj2, obj3, obj4);

const constNum: number = 1;
const constStr: string = "string";
const constBool: boolean = true;
const constArr1: number[] = [1, 2, 3];
const constArr2: Array<number> = [1, 2, 3];
const constObj1: { key: string } = { key: "value" };
const constObj2: { key: string, key2: number } = { key: "value", key2: 1 };
const constObj3: { key: string, key2?: number } = { key: "value" };
const constObj4: { key: string, key2?: number } = { key: "value", key2: 1 };

console.log(constNum, constStr, constBool, constArr1, constArr2, constObj1, constObj2, constObj3, constObj4);

// 型推論
let num1 = 1;
let str1 = "string";
let bool1 = true;
let arr11 = [1, 2, 3];
let obj11 = { key: "value" };

console.log(num1, str1, bool1, arr11, obj11);

const constNum1 = 1;
const constStr1 = "string";
const constBool1 = true;
const constArr11 = [1, 2, 3];
const constObj11 = { key: "value" };

console.log(constNum1, constStr1, constBool1, constArr11, constObj11);


// varは使わない、varの問題点
function varTest(): void {
  var x = 1;
  var x = 2; //後から再宣言できてしまう
  console.log('varTest',x); // 2
}
varTest()
