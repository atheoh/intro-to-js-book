function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

/*
Objects: Functions: bar
         Object literal: qux 
         Arrays: [1, 2, 3, [4, 5, 6]]
                 [4, 5, 6]

Variables: foo, arg1, arg2, qux, result, bar

Object property names: abc, def, ghi, jkl, mno, pqr, 0, 1, 2, 3

Primitive values: abc, def, ghi, jkl, mno, pqr, 0, 1, 2, 3, 4, 5, 6, 'Hello', 'Victor', 'Antonina'
                  null, NaN, '0', '1', '2', '3'
                           
*/