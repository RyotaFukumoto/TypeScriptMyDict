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

