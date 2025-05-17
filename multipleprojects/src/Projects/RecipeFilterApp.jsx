import React, { useState } from "react";
import "./recipeFilter.css"; 
import recipesData from "./recipesData"

const RecipeFilterApp = () => {
  // State to manage filter, cart, and selected recipes
  const [filteredRating, setFilteredRating] = useState(4.0);
  const [cartCount, setCartCount] = useState(0);
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  

  const handleRatingChange = (e) => {
    setFilteredRating(parseFloat(e.target.value));
  };

  const handleAddToCart = (recipe) => {
    setCartCount(cartCount + 1);
    setSelectedRecipes((prev) => [...prev, recipe]);
  };

  const filteredRecipes = recipesData.filter((recipe) => recipe.rating >= filteredRating);

  // Calculate average rating of the filtered recipes
  const averageRating = filteredRecipes.reduce((acc, recipe) => acc + recipe.rating, 0) / filteredRecipes.length;

  return (
    <div>
      <h2>🍽️ Recipe Explorer</h2>

      <div>
        <label>Filter by Rating: </label>
        <label htmlFor="rating">Filter by Rating:</label>
<select id="rating" value={filteredRating} onChange={handleRatingChange}>
  <option value="4">4.0+</option>
  <option value="4.3">4.3+</option>
  <option value="4.5">4.5+</option>
  <option value="4.7">4.7+</option>
  <option value="4.9">4.9+</option>
</select>
      </div>

      <div>
        <p>🛒 Cart Items: {cartCount}</p>
        <p>Average Rating: {averageRating.toFixed(2)} ({filteredRecipes.length} recipes)</p>
      </div>

      <div className="recipe-list">
        {filteredRecipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
          <img src={recipe.image} />
            <h3>{recipe.name}</h3>
            <p>🍴 Cuisine: {recipe.cuisine}</p>
            <p>⭐ Rating: {recipe.rating} ({recipe.reviews} reviews)</p>
            <button onClick={() => handleAddToCart(recipe)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );

};

export default RecipeFilterApp;
