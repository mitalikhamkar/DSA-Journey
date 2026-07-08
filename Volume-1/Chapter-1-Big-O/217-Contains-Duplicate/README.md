# 217. Contains Duplicate

## 📌 Problem Information

- **Platform:** LeetCode
- **Difficulty:** Easy
- **Problem Number:** 217
- **Topic:** Arrays, Hash Map (Frequency Counter)
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

---

## 📝 Problem Statement

Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

---

## 💡 Approach

1. Create a frequency object using `reduce()`.
2. Count how many times each number appears.
3. Traverse the frequency object.
4. If any frequency is greater than `1`, return `true`.
5. If no duplicates are found, return `false`.

---

## 🧠 Concepts Learned

- Frequency Counter
- Hash Map using JavaScript Objects
- `Array.reduce()`
- Object Traversal using `for...in`
- Boolean Return Logic

---

## 📊 Complexity Analysis

**Time Complexity:** `O(n)`

- One pass to build the frequency object.
- One pass through the frequency object.

**Space Complexity:** `O(n)`

- Extra space is used to store frequencies.

---

## 📚 My Learning Notes

While solving this problem, I learned:

- `reduce()` should return the accumulator (`acc`) on every iteration.
- Returning inside `reduce()` stops the accumulator from working correctly.
- When checking all values, `return false` should be placed **after** the loop, not inside it.
- Frequency counters are useful for detecting duplicates and counting occurrences.

This problem helped me strengthen my understanding of JavaScript objects and frequency-count patterns.

**Status:** 🟢 Solved independently using the Frequency Counter approach.
