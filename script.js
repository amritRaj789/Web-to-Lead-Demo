function submitHandler() {
  let inputElement = document.querySelector(".input-date");
  let outputElement = document.querySelector(".output-date");
  console.log("INput date value: ", inputElement.value);

  let formattedDate = new Date(inputElement.value).toLocaleDateString("en-IN");
  outputElement.value = formattedDate;
}
