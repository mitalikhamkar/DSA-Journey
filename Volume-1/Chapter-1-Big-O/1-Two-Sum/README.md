# 1. Two Sum

## 📌 Problem Information

- **Platform:** LeetCode
- **Difficulty:** Easy
- **Problem Number:** 1
- **Topic:** Arrays
- **Approach:** Brute Force
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

---

## 📝 Problem Statement

Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to the target.

You may assume that exactly one solution exists, and you may not use the same element twice.

---

## 💡 Approach

1. Traverse the array using two nested loops.
2. Select the first number using the outer loop.
3. Compare it with every following number using the inner loop.
4. Calculate their sum.
5. If the sum equals the target, return the indices of both numbers.

---

## 🧠 Concepts Learned

- Nested Loops
- Pair Comparison
- Array Indexing
- Brute Force Algorithm
- Returning Indices Instead of Values

---

## 📊 Complexity Analysis

**Time Complexity:** `O(n²)`

- Every element is compared with the remaining elements.

**Space Complexity:** `O(1)`

- No extra data structure is used.

---

## 📚 My Learning Notes

While solving this problem, I learned:

- The problem asks for **indices**, not the actual numbers.
- The inner loop should start from `i + 1` to avoid comparing the same element twice and to avoid duplicate comparisons.
- It is important to understand the difference between array values (`nums[i]`) and array indices (`i`).
- A brute-force solution works correctly before optimizing to a better approach.

**Status:** 🟢 Solved independently using the Brute Force approach.
