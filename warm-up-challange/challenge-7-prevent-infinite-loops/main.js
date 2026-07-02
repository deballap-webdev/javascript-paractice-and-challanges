do {
  const quit = prompt("Enter the word 'quit' exactly as it is");
  if (quit !== "quit") {
    alert("You didn't enter 'quit' (all lower case no spacing)");
    continue;
  }
  break;
} while (true);
