function sum(a: number, b: number) {
  return a + b;
}

function sum2(): number {
  return 10;
}

function sum3(a: number, b: number): number {
  return a + b;
}

// 함수의 옵셔널 파라미터
function log(a: string, b?: string, c?: string) {}
log("a");
log("a", "b");
