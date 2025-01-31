function submitHandler() {
  let inputElement = document.querySelector(".input-date");
  let outputElement = document.querySelector(".output-date");
  console.log("INput date value: ", inputElement.value);

  let formattedDate = new Date(inputElement.value).toLocaleDateString("en-IN");
  outputElement.value = formattedDate;
}

function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);
