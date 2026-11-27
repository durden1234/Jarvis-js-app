const input = document.getElementById("cmdInput");
const button = document.getElementById("runBtn");
const output = document.getElementById("output");

function runCommand() {
  const text = input.value.trim();
  output.textContent = text
    ? `J.A.R.V.I.S.: Executed "${text}" at ${new Date().toLocaleTimeString()}, sir.`
    : "J.A.R.V.I.S.: Please enter a command first, sir.";
}

button.addEventListener("click", runCommand);
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") runCommand();
});
