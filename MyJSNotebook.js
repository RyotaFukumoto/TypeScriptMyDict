// 型推論と動的型付け、TypeScript上ではエラーになるが、JavaScript上ではエラーにならない
function dynamicType() {
  let x = 1; // xはnumber型となる
  x = "hello"; //x はstring型となる
  console.log(x.substring(1, 3)); // el と表示される
}

dynamicType();