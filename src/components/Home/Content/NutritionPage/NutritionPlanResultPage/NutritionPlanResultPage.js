import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './NutritionPlanResultPage.scss';

const NutritionPlanResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get nutrition plan from location state
  const nutritionPlan = location.state?.nutritionPlan;
  console.log('NutritionPlanResultPage - Received data:', nutritionPlan);

  React.useEffect(() => {
    if (!location.state || !location.state.nutritionPlan) {
      navigate('/nutrition');
    }
  }, [location.state, navigate]);

  if (!nutritionPlan) {
    return null;
  }

  // Extract data from the nutrition plan
  const {
    plan_id,
    macro_targets,
    weekly_plan
  } = nutritionPlan;

  const handleCreateNew = () => {
    navigate('/nutrition');
  };

  // Get today's date to show today's plan
  const today = new Date();
  const dayOfWeek = today.toLocaleDateString('en-US', { weekday: 'long' });
  const todaysPlan = weekly_plan?.daily_plans?.[dayOfWeek];

  // Get plan metadata
  const planMetadata = weekly_plan?.plan_metadata || {};

  return (
    <div className="nutrition-plan-result-page">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="mb-0">Your Personalized Nutrition Plan</h2>
              <button 
                className="btn btn-primary" 
                onClick={handleCreateNew}
              >
                Create New Plan
              </button>
            </div>

            <div className="nutrition-plan-result">
              {/* Plan Info Section */}
              <div className="card mb-4">
                <div className="card-header">
                  <h4 className="mb-0">Plan Information</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <p><strong>Plan ID:</strong> {plan_id}</p>
                      <p><strong>Start Date:</strong> {new Date(planMetadata.start_date?.$date).toLocaleDateString()}</p>
                      <p><strong>End Date:</strong> {new Date(planMetadata.end_date?.$date).toLocaleDateString()}</p>
                    </div>
                    <div className="col-md-6">
                      <p><strong>Dietary Restrictions:</strong> {planMetadata.dietary_restrictions?.join(', ') || 'None'}</p>
                      <p><strong>Allergens:</strong> {planMetadata.allergens?.join(', ') || 'None'}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Daily Targets Section */}
              <div className="card mb-4">
                <div className="card-header">
                  <h4 className="mb-0">Daily Nutritional Targets</h4>
                </div>
                <div className="card-body">
                  <div className="row text-center">
                    <div className="col-12 mb-4">
                      <div className="calories-box">
                        <span className="calories-number">{Math.round(macro_targets.calories)}</span>
                        <span className="calories-unit">calories/day</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="macro-item p-3 rounded bg-light">
                        <h5>Protein</h5>
                        <div className="macro-value display-4">{Math.round(macro_targets.protein)}g</div>
                        <div className="macro-calories text-muted">
                          ({Math.round(macro_targets.protein * 4)} calories)
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="macro-item p-3 rounded bg-light">
                        <h5>Carbs</h5>
                        <div className="macro-value display-4">{Math.round(macro_targets.carbs)}g</div>
                        <div className="macro-calories text-muted">
                          ({Math.round(macro_targets.carbs * 4)} calories)
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="macro-item p-3 rounded bg-light">
                        <h5>Fat</h5>
                        <div className="macro-value display-4">{Math.round(macro_targets.fat)}g</div>
                        <div className="macro-calories text-muted">
                          ({Math.round(macro_targets.fat * 9)} calories)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weekly Meal Plan Section */}
              <div className="card mb-4">
                <div className="card-header">
                  <h4 className="mb-0">Weekly Meal Plan</h4>
                </div>
                <div className="card-body">
                  <nav>
                    <div className="nav nav-tabs mb-4" id="nav-tab" role="tablist">
                      {Object.keys(weekly_plan?.daily_plans || {}).map((day, index) => (
                        <button
                          key={day}
                          className={`nav-link ${index === 0 ? 'active' : ''}`}
                          id={`nav-${day.toLowerCase()}-tab`}
                          data-bs-toggle="tab"
                          data-bs-target={`#nav-${day.toLowerCase()}`}
                          type="button"
                          role="tab"
                          aria-controls={`nav-${day.toLowerCase()}`}
                          aria-selected={index === 0}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    {Object.entries(weekly_plan?.daily_plans || {}).map(([day, dayPlan], index) => (
                      <div
                        key={day}
                        className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
                        id={`nav-${day.toLowerCase()}`}
                        role="tabpanel"
                        aria-labelledby={`nav-${day.toLowerCase()}-tab`}
                      >
                        <div className="row">
                          {Object.entries(dayPlan.meals).map(([mealType, meal]) => (
                            <div key={mealType} className="col-md-6 mb-4">
                              <div className="meal-item">
                                <h5 className="meal-title text-capitalize">{mealType}</h5>
                                <div className="meal-macros mb-3">
                                  <small className="text-muted">
                                    Calories: {Math.round(meal.total_calories)} | 
                                    Protein: {Math.round(meal.total_protein)}g | 
                                    Carbs: {Math.round(meal.total_carbs)}g | 
                                    Fat: {Math.round(meal.total_fat)}g
                                  </small>
                                </div>
                                <ul className="meal-foods list-unstyled">
                                  {meal.foods.map((food, index) => (
                                    <li key={index} className="mb-2">
                                      <i className="fas fa-utensils me-2"></i>
                                      <strong>{food.food_name}</strong> ({food.portion_grams}g)
                                      <br />
                                      <small className="text-muted ms-4">
                                        {Math.round(food.calories)} cal | 
                                        P: {Math.round(food.protein)}g | 
                                        C: {Math.round(food.carbs)}g | 
                                        F: {Math.round(food.fat)}g
                                      </small>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="daily-totals mt-3 p-3 bg-light rounded">
                          <h5>Daily Totals for {day}</h5>
                          <div>
                            Calories: {Math.round(dayPlan.daily_totals.calories)} | 
                            Protein: {Math.round(dayPlan.daily_totals.protein)}g | 
                            Carbs: {Math.round(dayPlan.daily_totals.carbs)}g | 
                            Fat: {Math.round(dayPlan.daily_totals.fat)}g
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionPlanResultPage;
