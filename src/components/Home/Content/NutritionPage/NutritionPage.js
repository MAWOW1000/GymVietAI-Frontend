import React from 'react';
import './NutritionPage.scss';

const NutritionPage = () => {
  const sampleData = {
    title: "Sample Diet Plan",
    meals: [
      {
        day: "Monday",
        breakfast: "Oatmeal with berries",
        lunch: "Chicken salad sandwich",
        dinner: "Baked salmon with roasted vegetables",
        snack: "Fruit salad",
      },
      {
        day: "Tuesday",
        breakfast: "Yogurt with granola",
        lunch: "Leftover salmon and vegetables",
        dinner: "Lentil soup",
        snack: "Apple slices with peanut butter",
      },
      // Add more meal data as needed
    ],
    nutrition: {
      calories: 2000,
      carbs: 150,
      protein: 100,
      fat: 50,
    },
  };

  if (!sampleData) {
    return <div>Loading diet plan...</div>;
  }

  return (
    <div className="nutrition-page">
      <h2>{sampleData.title}</h2>
      <table className="diet-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Meal</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.meals.map((meal, index) => (
            <React.Fragment key={index}>
              <tr>
                <td>{meal.day}</td>
                <td>Breakfast</td>
                <td>{meal.breakfast}</td>
              </tr>
              <tr>
                <td></td>
                <td>Lunch</td>
                <td>{meal.lunch}</td>
              </tr>
              <tr>
                <td></td>
                <td>Dinner</td>
                <td>{meal.dinner}</td>
              </tr>
              <tr>
                <td></td>
                <td>Snack</td>
                <td>{meal.snack}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <div className="nutrition-summary">
        <div className="nutrition-item">
          <img src="/icons/flame.svg" alt="calories" width="20px" height="20px" />
          <span>Total Calories: <span className="value">{sampleData.nutrition.calories}</span> kcal</span>
        </div>

        <div className="nutrition-item">
          <img src="/icons/bread.svg" alt="calories" width="20px" height="20px" />
          <span>Carbohydrates: <span className="value">{sampleData.nutrition.carbs}</span> g</span>
        </div>

        <div className="nutrition-item">
          <img src="/icons/meat.svg" alt="calories" width="20px" height="20px" />
          <span>Protein: <span className="value">{sampleData.nutrition.protein}</span> g</span>
        </div>

        <div className="nutrition-item">
          <img src="/icons/avocado.svg" alt="calories" width="20px" height="20px" />
          <span>Fat: <span className="value">{sampleData.nutrition.fat}</span> g</span>
        </div>
      </div>
    </div>
  );
};

export default NutritionPage;
