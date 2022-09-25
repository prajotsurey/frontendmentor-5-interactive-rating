const rating = document.location.href.split("=")[1];
if (!rating || rating < 1) {
  document.location.href = "./index.html";
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#rating").innerHTML = rating;
});
