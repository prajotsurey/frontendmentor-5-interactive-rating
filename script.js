document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#rating-form");
  const radios = document.querySelectorAll("[name=rating]");
  let checked = false;
  var rating = 0;
  let error = document.querySelector("#rating-error");

  radios.forEach((radio) =>
    radio.addEventListener("click", (event) => {
      checked = true;
      rating = event.target.value;
      error.textContent = "";
      error.classList.remove("error");
    })
  );

  form.addEventListener("submit", async (event) => {
    if (!checked) {
      error.textContent = "Please select a rating";
      error.classList.add("error");
    } else {
      window.location.href = `./thanks.html?rating=${rating}`;
    }
    event.preventDefault();
  });
});
