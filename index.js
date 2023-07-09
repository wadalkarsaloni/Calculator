let input = "";

function appendCharacter(character) {
  input += character;
  document.getElementById("result").value = input;
}

function clearInput() {
  input = "";
  document.getElementById("result").value = input;
}

function deleteLastCharacter(){
    input = input.slice(0, -1);
    document.getElementById("result").value = input;
}

function calculate() {
  if (input === "") return;
  let result;
  try {
    // eval() function and displays the result in the input field.
    result = eval(input);
    if (Number.isNaN(result) || !Number.isFinite(result)) {
      throw new Error("Invalid input");
    }
  } catch (error) {
    result = "Error";
  }
  document.getElementById("result").value = result;
  input = "";
}


