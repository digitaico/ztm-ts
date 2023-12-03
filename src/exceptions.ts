function divide(a: number, b: number) {
  if (b === 0) {
    throw new Error('Cannot Divide By Zero!!');
  }

  return a / b;
}

//console.warn(divide(94, 4));
//console.warn(divide(7, 0));
/*
try {
  // console.warn(divide(5, 0));
  console.warn(divide(19, 3));
} catch (err) {
  console.error(`[Error]: ${err}`);
} finally {
  console.log('...divisiones');
}
*/
function divide2(a: number, b: number) {
  try {
    return divide(a, b);
  } catch (e) {
    console.error('Error: Function not working!');
    throw e;
  } finally {
    console.log('... end');
  }
}

try {
  // console.warn(divide(5, 0));
  divide2(14, 0);
} catch (err) {
  //console.error(`[Error]: ${err}`);
} finally {
  //console.log('...divisiones');
}
