# 1672. Richest Customer Wealth

## 📌 Problem Information

- **Platform:** LeetCode
- **Difficulty:** Easy
- **Problem Number:** 1672
- **Topic:** Arrays, 2D Arrays
- **Time Complexity:** O(m × n)
- **Space Complexity:** O(1)

---

## 📝 Problem Statement

You are given a 2D array `accounts` where each row represents a customer and each column represents the money in one of their bank accounts.

Return the maximum wealth among all customers.

---

## 💡 Approach

1. Traverse each customer (each row).
2. Calculate the total wealth of the current customer by summing all bank account balances.
3. Compare the current customer's wealth with the maximum wealth found so far.
4. Update the maximum wealth if the current customer is richer.
5. Return the maximum wealth after checking all customers.

---

## 🧠 Concepts Learned

- Traversing a 2D Array
- Nested Loops
- Maintaining a Running Sum
- Tracking Maximum Value
- Time Complexity Analysis

---

## 📊 Complexity Analysis

**Time Complexity:** `O(m × n)`

- Every element in the 2D array is visited exactly once.

**Space Complexity:** `O(1)`

- Only two extra variables (`wealth` and `maxWealth`) are used.

---

## 📚 My Learning Notes

This was my first problem involving a 2D array.

Initially, I made mistakes such as:
- Resetting `maxWealth` inside the loop.
- Returning the answer too early.
- Mixing up `accounts[i]` and `accounts[i][j]`.

While debugging, I learned:
- A row represents one customer.
- The inner loop should calculate the customer's total wealth.
- The maximum wealth should be updated only after calculating the entire row.
- The final answer should be returned only after checking every customer.

**Status:** 🟢 Solved independently after debugging.
