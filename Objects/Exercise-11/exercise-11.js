let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

console.log[obj.bar[0][3].xyz];

obj.bar[3].xyz = 606;

console.log[obj];