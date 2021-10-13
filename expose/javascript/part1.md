# Part 1 
1. Line 9 prints 20
2. Line 13 prints 20
3. Line 9 prints 20
4. Line 13 returns an error because the `result` variable is declared with `let`. This means that `result` is only in the `if(add)` block's scope. Line 13 is outside that scope and therefore can not access the `result` variable.
5. The code returns an error at line 7 because the `result` variable is decalred as a  `const` and therefore can not be reasigned.
6. Line 13 returns an error because a `const` variable can only be accessed within the block it is declared.