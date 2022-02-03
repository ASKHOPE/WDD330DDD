const input = document.querySelector("#favchap");
// console.log(input); // Pound for Id selection.
const button = document.querySelector("button");
// console.log(button); // button for button type.
const output = document.querySelector(".list");
// console.log(output); // Dont forget to use period for class selection.

button.addEventListener("click", function() {
  if (input.value != "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    //Contruct li element and inside li element text using textContent

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    //Contruct deleteBtn element and inside it will be x.

    li.append(deleteBtn);
    output.append(li);
    //To the same li element above adds the li to the list (output)

    deleteBtn.addEventListener("click", function () {
      output.removeChild(li);
      input.focus;
    // Where ever the x be it will be brought to focus and removed in tthe list (output)
    });
    input.value = "";
    input.focus;
    
  }
});
