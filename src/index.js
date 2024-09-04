function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "c53cf67ebfdea328dfb55e410tc594od";
  let context =
    "be polite and provide a very short recipe.Your mission is to generate a 4 line recipe in basic HTML element and seperate each line with a <br />. Make sure to follow the user instructions.Do not include a title to the recipe. Sign the recipe with 'SheCodes AI'inside <strong> element at the bottom of the recipe and NOT at the beginning";
  let prompt = `User instructions: Generate best recipes in ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⌛Generating the recipe for ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
