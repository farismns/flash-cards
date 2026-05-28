const flashcards = [
  {
    id: 1,
    question: "What is the difference between `let`, `const`, and `var`?",
    answer:
      "`var` is function-scoped and hoisted. `let` is block-scoped and reassignable. `const` is block-scoped and cannot be reassigned.",
  },
  {
    id: 2,
    question: "What is hoisting in JavaScript?",
    answer:
      "JavaScript moves variable and function declarations to the top of their scope before execution. `var` is hoisted as `undefined`; `let`/`const` are hoisted but not initialized (temporal dead zone).",
  },
  {
    id: 3,
    question: "What is the difference between `call`, `apply`, and `bind`?",
    answer:
      "All three set `this`. `call` passes args individually, `apply` passes them as an array. `bind` returns a new function with `this` permanently set.",
  },
  {
    id: 4,
    question: "What is a pure function?",
    answer:
      "A function that always returns the same output for the same input and has no side effects — it doesn't modify anything outside itself.",
  },
  {
    id: 5,
    question: "What is the difference between `map`, `filter`, and `forEach`?",
    answer:
      "`map` returns a new array of transformed values. `filter` returns a new array of matching values. `forEach` iterates but returns nothing.",
  },
  {
    id: 6,
    question: "What is `async/await`?",
    answer:
      "Syntax sugar over Promises. `async` marks a function as asynchronous; `await` pauses execution inside it until the Promise resolves, making async code read like synchronous code.",
  },
  {
    id: 7,
    question: "What is the prototype chain?",
    answer:
      "When a property isn't found on an object, JavaScript looks up its prototype, then that prototype's prototype, until it reaches `null`. This chain enables inheritance.",
  },
  {
    id: 8,
    question: "What is destructuring?",
    answer:
      "A syntax to unpack values from arrays or properties from objects into distinct variables. Example: `const { name, age } = user;`",
  },
  {
    id: 9,
    question: "What is the spread operator (`...`)?",
    answer:
      "It expands an iterable (array, object, string) into individual elements. Useful for copying, merging, or passing items as function arguments.",
  },
  {
    id: 10,
    question: "What is a higher-order function?",
    answer:
      "A function that takes another function as an argument, returns a function, or both. Examples: `map`, `filter`, `reduce`.",
  },
];

export default flashcards;
