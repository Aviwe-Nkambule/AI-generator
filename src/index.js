function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings:
      "Similar to the British custard tart or Portuguese pasteis de nata, melktert consists of a pastry case filled with milk, eggs and which is usually thickened with flour. The finished tart is traditionally dusted with cinnamon.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
