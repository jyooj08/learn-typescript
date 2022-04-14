class Person1 {
  // 클래스 로직
  constructor(name, age) {
    console.log("생성 되었습니다.");
    this.name = name;
    this.age = age;
  }
}

new Person1(); // 생성되었습니다.
let chihyeon = new Person1("치현", 25);
console.log(chihyeon);

function Person2(name, age) {
  this.name = name;
  this.age = age;
}
