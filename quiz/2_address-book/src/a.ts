function fetchItems(): Promise<string[]> {
  let items = ["a", "b", "c"];
  return new Promise(function (resolve) {
    resolve(items);
  });
}
