# Challenge 01: The Number Guesser (Math & Logic)

## 📝 Challenge Prompt
Generate a random whole number between 1 and 100. Prompt the user for a guess, convert their input to a number, and tell them if they are "too high", "too low", or "correct".

---

## 🛠️ Concepts Covered
* **Control Flow & Loops:** Implementing an infinite game loop using `while (true)` with dynamic `break` and `continue` triggers.
* **Functional Programming:** Splitting tasks into small, single-purpose functions (Separation of Concerns).
* **Data Sanitization & Type Conversion:** Handling `prompt()` string outputs and parsing them into true numbers using `Number()`, while filtering out falsy values like empty strings or "Cancel" selections.
* **Math Operations:** Utilizing `Math.random()` and `Math.floor()` to dynamically generate a valid range from 1 to 100 inclusive.
* **Ternary Operators:** Structuring clean, nested conditional evaluations (`? :`) to determine and return game outcomes.

---

## 💡 What I Learned & Key Takeaways
1. **The Difference Between `=` and `===`:** A single equals sign assigns a value to a variable, whereas a triple equals sign strictly compares two values. Forgetting this can accidentally overwrite data mid-loop.
2. **Sanitizing Falsy Values:** User input from browser prompts can be unpredictable. When a user clicks "Cancel", it returns `null`. If they press enter without typing, it returns an empty string `""`. Writing defensive guard clauses ensures the program doesn't crash.
3. **Robust Code vs. The Happy Path:** Instead of just writing a linear 10-line script that assumes the user does everything perfectly, I built an interactive game loop with confirmation checks (`confirm()`) to let the player decide when to quit or restart.

---

## 📂 Project Structure
* `main.js` - Contains the modular game logic.
* `README.md` - Documentation and overview of the challenge.