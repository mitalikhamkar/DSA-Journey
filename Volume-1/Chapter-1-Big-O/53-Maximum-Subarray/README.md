# 53. Maximum Subarray

## 📌 Problem Information

- **Platform:** LeetCode
- **Difficulty:** Medium
- **Problem Number:** 53
- **Topic:** Arrays, Dynamic Programming (Kadane's Algorithm)
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

---

## 📝 Problem Statement

Given an integer array `nums`, find the contiguous subarray that has the largest sum and return its sum.

A subarray must contain consecutive elements.

---

## 💡 Approach

1. Initialize `currentSum` and `maxSum` with the first element.
2. Traverse the array from left to right.
3. At each element:
   - Decide whether to start a new subarray from the current element.
   - Or extend the previous subarray.
4. Update the maximum sum found so far.
5. Return the maximum subarray sum.

---

## 🧠 Concepts Learned

- Kadane's Algorithm
- Dynamic Programming
- Running Sum
- Choosing Between Two Options
- Tracking Maximum Value
- Linear Traversal

---

## 📊 Complexity Analysis

**Time Complexity:** `O(n)`

- The array is traversed only once.

**Space Complexity:** `O(1)`

- Only two variables (`currentSum` and `maxSum`) are used.

---

## 📚 My Learning Notes

While solving this problem, I learned:

- A subarray must contain contiguous elements.
- A negative running sum can reduce the overall result, so sometimes it's better to start a new subarray.
- `currentSum` represents the maximum sum ending at the current index.
- `maxSum` stores the best answer found so far.
- `Math.max()` helps compare whether continuing the current subarray or starting a new one gives a better result.

This was my first Medium-level DSA problem. Instead of memorizing Kadane's Algorithm, I focused on understanding the logic behind each step.

**Status:** 🟢 Solved independently with guided reasoning.
