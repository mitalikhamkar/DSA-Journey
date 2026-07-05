# 1295. Find Numbers with Even Number of Digits

## 📌 Problem Information

- **Platform:** LeetCode
- **Difficulty:** Easy
- **Problem Number:** 1295
- **Topic:** Arrays, Math, Strings
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

---

## 📝 Problem Statement

Given an array of integers, return the number of elements that contain an even number of digits.

---

## 💡 Approach

1. Traverse each number in the array.
2. Convert the number into a string.
3. Find the number of digits using the string's length.
4. Check whether the digit count is even using the modulo operator (`%`).
5. If it is even, increment the counter.
6. Return the final count.

---

## 🧠 Concepts Learned

- Array Traversal
- Number to String Conversion
- String Length
- Modulo Operator (`%`)
- Counting Based on a Condition

---

## 📊 Complexity Analysis

**Time Complexity:** `O(n)`

- Each element is visited once.

**Space Complexity:** `O(1)`

- Only a few extra variables are used. (The temporary string does not grow with the size of the input array.)

---

## 📚 My Learning Notes

While solving this problem, I learned:

- Numbers do not have a `length` property.
- Converting a number to a string makes it easy to count its digits.
- The modulo operator (`%`) is useful for checking whether a number is even or odd.
- Breaking the problem into small steps made the solution much easier to write.

**Status:** 🟢 Solved independently with a small hint.
