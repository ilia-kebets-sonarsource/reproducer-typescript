function foo(bar: boolean | undefined, baz: boolean) {
  const qux = bar || baz;
  return qux;
}

type Bar = {
  bar: boolean
};

function foo2(bar: Bar | undefined, baz: boolean) {
  const qux = bar?.bar || baz;
  return qux;
}
