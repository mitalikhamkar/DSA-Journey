# 1773. Count Items Matching a Rule

## 📌 Problem Information

- **Platform:** LeetCode
- **Difficulty:** Easy
- **Problem Number:** 1773
- **Topic:** Arrays, Strings
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

---

## 📝 Problem Statement

You are given a 2D array `items`, where each item contains three attributes:

- Type
- Color
- Name

You are also given a `ruleKey` and a `ruleValue`.

Return the number of items whose attribute specified by `ruleKey` matches `ruleValue`.

---

## 💡 Approach

1. Determine which column to check based on `ruleKey`.
   - `type` → index `0`
   - `color` → index `1`
   - `name` → index `2`
2. Traverse every item in the array.
3. Compare the value at the selected index with `ruleValue`.
4. Increment the counter whenever a match is found.
5. Return the total count.

---

## 🧠 Concepts Learned

- Working with 2D Arrays
- Mapping values to indexes
- Conditional Statements
- Linear Traversal
- Counting Matching Elements

---

## 📊 Complexity Analysis

**Time Complexity:** `O(n)`

- Each item is visited exactly once.

**Space Complexity:** `O(1)`

- Only a few extra variables are used.

---

## 📚 My Learning Notes

While solving this problem, I learned:

- A 2D array can be accessed using `items[i][j]`.
- Instead of checking every column, I can first map `ruleKey` to the correct column index.
- The condition should compare `items[i][index]` with `ruleValue`.
- I initially made the mistake of returning inside the loop, which stopped the function before checking all items.
- The correct approach is to count every match and return the count after the loop finishes.

**Status:** 🟢 Solved with guided debugging.
