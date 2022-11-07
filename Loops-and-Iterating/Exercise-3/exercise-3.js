let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

/* The above code causes an infinite loop because every time the counter value is
incremented, it gets reset to the value of 1 by its initialization on line 3 so the
counter value never overcomes the value of 2 thus the break statement in the if 
statement never runs.
*/