function foo(bar: boolean | undefined, baz: boolean) {
  const qux = bar || baz;
  return qux;
}
