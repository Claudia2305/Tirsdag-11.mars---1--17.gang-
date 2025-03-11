const convertButton = document.querySelector("#convertButton");

convertButton.addEventListener("click", function () {
  const unitInput = document.querySelector("#unitInput").value;
  const unitFrom = document.querySelector("#unitFrom");
  const unitTo = document.querySelector("#unitTo");

  // Fylll inn og logg alle variabler for å se om vi henter riktig før vi går videre i koden
  console.log(
    "Knappen er trykket!",
    convertButton,
    unitInput,
    unitFrom,
    unitTo
  );
});
