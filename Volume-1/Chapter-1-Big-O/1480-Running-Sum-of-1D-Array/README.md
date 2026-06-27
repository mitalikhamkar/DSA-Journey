# 1480. Running Sum of 1D Array

## LeetCode

Easy

## Topic

* Array
* Prefix Sum

---

## Problem

Given an integer array `nums`, return the running sum of the array.

Example:

Input:

```
[1,2,3,4]
```

Output:

```
[1,3,6,10]
```

---

## My Approach

I initialized a variable `sum` to keep track of the running total.

Then I traversed the array once using a `for` loop.

For every element:

* Add the current element to `sum`.
* Store the updated sum inside a new array.

Finally, return the new array.

---

## Algorithm

1. Create an empty result array.
2. Initialize `sum = 0`.
3. Traverse the array.
4. Update running sum.
5. Push running sum into result.
6. Return result.

---

## Complexity Analysis

Time Complexity:

```
O(n)
```

Only one traversal of the array.

Space Complexity:

```
O(n)
```

A new array is created to store the running sums.

---

## What I Learned

* How Prefix Sum works.
* How to perform a linear scan.
* Difference between O(1) and O(n) extra space.
* Building an output array while traversing only once.

---

## Self Reflection

This was my first problem after studying Chapter 1 of my DSA handbook.

I solved around 40–50% on my own and used hints to identify mistakes instead of copying the complete solution. This helped me understand the logic behind the algorithm rather than memorizing it.

Status: 🟡 Solved with guidance
