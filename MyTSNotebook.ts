// letとconstの違いを説明するサンプルコード
// letは再代入可能、Constは再代入不可能
function letConst(): void {
  let a = 1;
  a = 2;
  console.log("let", a); // 2

  const b = 1;
  // b = 2; // error
  console.log("const", b);
}
letConst();


// constは再代入不可能だが、オブジェクトのプロパティは変更可能、可変オブジェクトは保護されない
function constObj(): void {
  const obj = { key: "value" };
  obj.key = "new value";
  console.log("const obj", obj); // { key: 'new value' }

  // obj = { key: "value" }; // error
}
constObj();


// constは再代入不可能だが、配列の要素は変更可能
function constArr(): void {
  const arr = [1, 2, 3];
  arr[0] = 4;
  console.log("const arr", arr); // [ 4, 2, 3 ]

  // arr = [1, 2, 3]; // error

  arr.push(4);
  console.log("const arr", arr); // [ 4, 2, 3, 4 ]
}
constArr();


// 変数宣言の型注釈
function typeAnnotation(): void {
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
}
typeAnnotation();


// constの型注釈
function constTypeAnnotation(): void {
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
}
constTypeAnnotation();


// 型推論
function typeInference(): void {
  let num1 = 1;
  let str1 = "string";
  let bool1 = true;
  let arr11 = [1, 2, 3];
  let obj11 = { key: "value" };

  // num1 = 'hello' // 型推論によりエラーになる
  // str1 = 1 // 型推論によりエラーになる
  // bool1 = 'hello' // 型推論によりエラーになる
  // arr11 = [1, 2, 'hello'] // 型推論によりエラーになる
  // obj11 = { key: 1 } // 型推論によりエラーになる

  console.log(num1, str1, bool1, arr11, obj11);
}
typeInference();


function constTypeInference(): void {
  const constNum1 = 1;
  const constStr1 = "string";
  const constBool1 = true;
  const constArr11 = [1, 2, 3];
  const constObj11 = { key: "value" };

  // constNum1 = 'hello' // 型推論によりエラーになる
  // constStr1 = 1 // 型推論によりエラーになる
  // constBool1 = 'hello' // 型推論によりエラーになる
  // constArr11 = [1, 2, 'hello'] // 型推論によりエラーになる
  // constObj11 = { key: 1 } // 型推論によりエラーになる

  console.log(constNum1, constStr1, constBool1, constArr11, constObj11);
}
constTypeInference();


// varは使わない、varの問題点
function varTest(): void {
  var x = 1;
  var x = 2; //後から再宣言できてしまう
  console.log('varTest', x); // 2
}
varTest()

// let、constは再宣言できない
function letTest(): void {
  let x = 1;
  // let x = 2; // error
  console.log('letTest', x); // 1
}
letTest()

function constTest(): void {
  const x = 1;
  // const x = 2; // error
  console.log('constTest', x); // 1
}
constTest()


// 変数の巻き上げ
// 変数宣言がスコープの先頭に移動すること
function hoistingTest(): void {
  console.log('hoisting', hoisting); // undefined
  var hoisting = 1;
}
hoistingTest();

// let、constは巻き上げが発生しない
function hoistingTest2(): void {
  // console.log('letHoisting', letHoisting); // tscコマンドでコンパル時にエラーになる
  let letHoisting = 1;
  console.log('letHoisting', letHoisting); // 1

  // console.log('constHoisting', constHoisting); // tscコマンドでコンパル時にエラーになる
  const constHoisting = 1;
  console.log('constHoisting', constHoisting); // 1
}
hoistingTest2();


// ブロックスコープ、varは関数スコープ、let、constはブロックスコープ
// varはブロックスコープを無視してしまう
function varBlockScope(): void {
  var x = 1;
  if (true) {
    console.log('varBlockIN ', x); // 1
    var x = 2;
  }
  console.log('varBlockOut', x);
}
varBlockScope();

// let、constはブロックスコープを守る
function letBlockScope(): void {
  let x = 1;
  if (true) {
    // console.log('letBlockIn', x); // error
    let x = 2;
  }
  console.log('letBlockOut', x); // 1
}
letBlockScope();


// 型推論と動的型付け、TypeScript上ではエラーになる
/*
function dynamicType(): void {
  let x = 1; // xはnumber型となる
  x = "hello"; //x はstring型となる
  console.log(x.substring(1, 3));
}
*/
// dynamicType();

// プリマティブ型
function showPrimitiveTypesExamples(): void {
    // boolean型: 真偽値
    let isDone: boolean = false;
    console.log('Boolean example:', isDone);

    // number型: 数値
    let decimal: number = 6;
    let hex: number = 0xf00d; // 16進数
    let binary: number = 0b1010; // 2進数
    let octal: number = 0o744; // 8進数
    console.log('Number examples:', decimal, hex, binary, octal);

    // string型: 文字列
    let color: string = "blue";
    color = 'red';
    console.log('String example:', color);

    // ローカル関数の定義と使用
    function warnUser(): void {
        console.log("This is my warning message");
    }
    warnUser();  // ネストされた関数の呼び出し

    // null型: null値のみ可能
    let u: null = null;
    console.log('Null example:', u);

    // undefined型: undefined値のみ可能
    let n: undefined = undefined;
    console.log('Undefined example:', n);

    // object型: オブジェクト
    let user: object = { name: "Hayes", id: 0 };
    console.log('Object example:', user);

    // アサーション: 型アサーション
    let someValue: any = "this is a string";
    let strLength: number = (someValue as string).length;
    console.log('Assertion example:', strLength);
}

// メソッドを呼び出して実行
showPrimitiveTypesExamples();


