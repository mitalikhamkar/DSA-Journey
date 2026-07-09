# 121. Best Time to Buy and Sell Stock

## 📌 Problem Information

- **Platform:** LeetCode
- **Difficulty:** Easy
- **Problem Number:** 121
- **Topic:** Arrays, Greedy
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

---

## 📝 Problem Statement

Given an array `prices` where `prices[i]` is the stock price on the `i`th day, find the maximum profit you can achieve by buying one stock on one day and selling it on a later day.

Return the maximum possible profit. If no profit can be made, return `0`.

---

## 💡 Approach

1. Keep track of the minimum stock price seen so far.
2. Traverse the array once.
3. For each price:
   - Update the minimum price if a lower price is found.
   - Otherwise, calculate the profit if the stock is sold today.
4. Update the maximum profit whenever a larger profit is found.
5. Return the maximum profit.

---

## 🧠 Concepts Learned

- Greedy Algorithm
- Running Minimum
- Tracking Maximum Value
- One Pass Array Traversal
- Optimized Linear Solution

---

## 📊 Complexity Analysis

**Time Complexity:** `O(n)`

- The array is traversed only once.

**Space Complexity:** `O(1)`

- Only a few variables are used.

---

## 📚 My Learning Notes

While solving this problem, I learned:

- The minimum price must always come before the selling day.
- Keeping track of the lowest price seen so far allows us to calculate the best profit at every step.
- `Math.max()` is useful for updating the best profit found so far.
- Returning inside the loop would stop the algorithm too early, so the return statement should be placed after the loop.

This problem helped me understand how a greedy approach can solve an optimization problem efficiently in a single traversal.

**Status:** 🟢 Solved independently with guided reasoning.
