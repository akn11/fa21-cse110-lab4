# Part 2
1. Line 12 outputs `3`. This is because `i` is declared as a `var` so it is not limited to a block scope. `i` increments to 3 in the loop and that is why at line 12 it outputs `3`.
2. Line 13 outputs `150`. discountedPrice is declared as a `var` so it doesn't have a block scope. At the end of the for loop, discountedPrice becomes 150 and that is the value it reatains when the code reaches line 13.
3. Line 14 outputs `150` for the same reason as seen in question 2, `finalPrice` is declared as a var so it doesn't have a block scope and at the time it reaches line 14, it has the value `150`.
4. The function will return an array with elements `[50,100,150]`. The for loop multiplies each of the array elements in `price` by 0.5 and pushes the new values into the array `discounted`.
5. Line 12 will return an error since `i` is decalred as a `let` variable and is being accessed outside of its scope.
6. Line 13 will return an error since `discountedPrices` is decalred as a `let` variable and is being accessed outside of its scope.
7. Line 14 will output `150` since `finalPrice` is declared as a `let` variable and is being called inside its block scope. 
8. The function will return an array with elements `[50,100,150]`. `discounted` is declared as a `let` variable and is being called within its scope.
9. Line 11 will return an error since `i` is decalred as a `let` variable and is being accessed outside of its scope.
10. Line 12 outputs `3` since `length` is declared as a `const` variable (with value 3) and is being called within its block scope.
11. The function will return an array with elements `[50,100,150]`. `discounted` is declared as a `const` variable and is being called within its scope.
12. 
    1. `student.name`
    2. `student["Grad Year"]`
    3. `student.greeting()`
    4. `student['Favorite Teacher'].name`
    5. `student.courseLoad[0]`
13.  
     1.   `'32'`: if a string dataype is followed by a `+` operator all following datatypes are concatenated as strings.
     2.   `1`: the `'3'` is converted to an int in order to carry out the `-` operation. 
     3.   `'3'`: `null` is interpreted as 0.
     4.   `'3null'`: all datatypes following a string and a `+` are concatenated as strings.
     5.   `4`: true is read as a 1.
     6.   `0`: `false` and `null` are both read as 0.
     7.   `'3undefined'`: all datatypes following a string and a `+` are concatenated as strings.
     8.   `NaN`: `undefined` becomes NaN
14. 
    1.  `true`: 2 is converted to an int and 2 > 1 is true
    2.  `false`: we compare the first chars which are `2` and `1`. So it becomes `'2' < '1'` which is false.
    3.  `true`: `'2'` is converted to an int.
    4.  `false`: `===` stand for equal value and type. This is false because we are comparing a string and a int.
    5.  `false`: true converts to 1 which is not equal to 2.
    6.  `true`: same type and both are `1`.
15. The `==` operator just checks if the values are equal to each other. `===` checks if both the values are equal to each other and if the datatypes are the same.
16. In part2_question16.js
17. The result is the array `[2,4,6]`. When `modifyArray` is called, it sends an array and a function as parameters. Line 4 uses thr `callback` to call the `doSomething` function which multiplies each value in the array by 2. It pushes these new values into `newArray` and returns that. 
18. In part2_question18.js
19. `1,4,3,2`









