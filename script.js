// JavaScript for Recipe Blog

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const recipeList = document.getElementById("recipes");
    const recipeForm = document.getElementById("recipe-form");

    // Search Recipes Functionality
    function searchRecipes() {
        const query = searchInput.value.toLowerCase();
        const recipes = recipeList.getElementsByClassName("recipe");

        for (let recipe of recipes) {
            const title = recipe.querySelector("h3").textContent.toLowerCase();
            const description = recipe.querySelector("p").textContent.toLowerCase();

            if (title.includes(query) || description.includes(query)) {
                recipe.style.display = "block";
            } else {
                recipe.style.display = "none";
            }
        }
    }

    // Add Event Listener for Search Button
    document.querySelector("nav button").addEventListener("click", searchRecipes);

    // Submit Recipe Functionality
    recipeForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.getElementById("recipe-title").value;
        const description = document.getElementById("recipe-description").value;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const imageInput = document.getElementById("recipe-image");
        const imageFile = imageInput.files[0];

        if (title && description && name && email && phone && imageFile) {
            const reader = new FileReader();

            reader.onload = function (e) {
                // Create a new recipe element
                const newRecipe = document.createElement("div");
                newRecipe.classList.add("recipe");
                newRecipe.innerHTML = `
                    <img src="${e.target.result}" alt="${title}" class="recipe-image">
                    <h3>${title}</h3>
                    <p>${description}</p>
                `;

                // Append the new recipe to the list
                recipeList.appendChild(newRecipe);

                // Reset the form
                recipeForm.reset();

                alert("Recipe submitted successfully!");
            };

            reader.readAsDataURL(imageFile);
        } else {
            alert("Please fill out all fields and upload an image.");
        }
    });
});