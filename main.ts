function foo(bar: boolean | undefined, baz: boolean | undefined) {
  const qux = bar || baz;
  return qux;
}
