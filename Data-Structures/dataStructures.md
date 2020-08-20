# Big O Notation

## 1 - Constant tiem: O(1)

no matter what is the size of input, we have the same number of operations

**Examples:**

- a

```js
  let a = 1,
  b = 2,
  c = a _ 17 + b _ 3;
```

O(1) because no matter what the input is, we have the same number of operations

- b

```js
let i = 0;
while (i < 20) {
  i = i + 1;
}
```

This is also (O(1)) becuase no matter what is the input size, we have the same number of operations

## 2- Linear time: O(n)

The number of operations vary with respect to input, for example if input is 10 we have 10 operations if input is 10,000 we have 10,000 operations(that of course in worst case scenario)

**Examples:**

```js
// if (n) is input
for (let i = 0; i < n; i++) {
  // do something
}
```

$$
f(n) = n $\equiv$ O(f(n)) = O(n)
$$

```js
let k = 0;
while (k < n) {
  k = k + 7;
}
```

$$
f(n) = n/7 $\equiv$ O(f(n)) = O(n) <= ignoring the constant unless (n)'s size is so big
$$

## Quadradic Time Complexity: O($n^2$)

The number of operations is the square of input. What that means is, if we have an array of 5 elements, the number of operations will be (5 $\time$ 5)

**Examples:**

```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // Operations
  }
}
```

$$
f(n) = n $\times$ n = n^2 $\equiv$ O(f(n)) = O(n^2)
$$

```js
for (let i = 0; i < n; i++) {
  // same as above only replaced 0 with i
  for (let j = i; j < n; j++) {
    // Operations
  }
}
```

In the above example the number of operations are less than the number of operations in the previous example but still we have $O(n^2)$.
You might ask but why? and that's a valid question, I would ask the same. To answer this question, using high school math, let's break it down:

- The outer loop is going all the way to i so it forms a series like below:
  assume n = 5;

  **i = 0**
  j = 0 => n - 5
  j = 1 => n - 4
  j = 2 => n - 3
  j = 3 => n - 2
  j = 4 => n - 1
  j = 5 => n - 0 <-- This is wher our loop terminates

  **i = 1**
  j = 1 => n - 4
  j = 2 => n - 3
  j = 3 => n - 2
  j = 4 => n - 1
  j = 5 => n - 0 <-- This is wher our loop terminates

  **i = 2**
  j = 2 => n - 3
  j = 3 => n - 2
  j = 4 => n - 1
  j = 5 => n - 0 <-- This is wher our loop terminates

  **i = 3**
  j = 3 => n - 2
  j = 4 => n - 1
  j = 5 => n - 0 <-- This is wher our loop terminates

  **i = 4**
  j = 4 => n - 1
  j = 5 => n - 0 <-- This is wher our loop terminates

  We will end up with the folowing series
  i = 0
  n(n - 5 + n - 4 + n - 3 + n - 2 + n - 1) => n(5n - 15) = n(n - 3) = n^2 - 3n
  i = 1
  n(n - 4 + n - 3 + n - 2 + n - 1) => n(4n - 10) = n(2n - 5) = 2n^2 - 5n
  i = 2
  n(n - 3 + n - 2 + n - 1) => n(3n - 6) = n(n - 2) = n^2 - 2n
  i = 3
  n(n - 2 + n - 1) => n(2n - 3) = 2n^2 - 3n
  i = 4
  n(n - 1) => n(n - 1) = n^2 - n
  i = 5 <-- Terminate

  Now let's go ahead and add them together
  n^2 - 3n + 2n^2 - 5n + n^2 - 2n + 2n^2 - 3n + n^2 - n = 7n^2 - 14n = n^2 - 2n

  In Big O notation, we ignore coefficients and compute Big O notation according to n with highest power. So the Big O for the above loop is O(n^2)

## 4- Logarithmic Time Complexity: O(log2(n))

The number of operations is the log of input.

**Examples**

Binary Search, Merge Sort, or anything that works using `Divide & Conquer` which means, with every iteration we ignore half of the input size
