# 1470. Shuffle the Array

## 📌 Problem Information

- **Platform:** LeetCode
- **Difficulty:** Easy
- **Problem Number:** 1470
- **Topic:** Arrays
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

---

## 📝 Problem Statement

You are given an array `nums` containing `2n` elements in the format:

[x1, x2, ..., xn, y1, y2, ..., yn]

Return a new array in the format:

[x1, y1, x2, y2, ..., xn, yn]

---

## 💡 Approach

1. Create an empty result array.
2. Traverse only the first half of the array (`0` to `n - 1`).
3. For each index:
   - Add `nums[i]`.
   - Add `nums[i + n]`.
4. Return the result array after the loop completes.

---

## 🧠 Concepts Learned

- Array Traversal
- Array Indexing
- Using `push()`
- Working with Two Halves of an Array
- Understanding Time vs Space Complexity

---

## 📊 Complexity Analysis

**Time Complexity:** `O(n)`

- The loop runs exactly `n` times.

**Space Complexity:** `O(n)`

- A new array is created to store the shuffled result.

---

## 📚 My Learning Notes

While solving this problem, I learned:

- `n` is a number, so I should use `i < n` instead of `i < n.length`.
- I don't need to split the array into two separate arrays because the original array already contains both halves.
- Instead of replacing the result array, I should use `push()` to add elements.
- The `return` statement should be placed after the loop so every pair is processed.

**Status:** 🟢 Solved independently after guided thinking.
