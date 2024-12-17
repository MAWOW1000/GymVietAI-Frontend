import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postCreateNutritionPlan } from '../../../../util/nutritionAxios/nutritionApi';
import { toast } from 'react-toastify';
import BasicInfoForm from './components/BasicInfoForm';
import DietaryRestrictionsForm from './components/DietaryRestrictionsForm';
import AllergensForm from './components/AllergensForm';
import './NutritionPage.scss';

const NutritionPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    Weight: '',
    Height: '',
    Age: '',
    Gender: '',
    Goal: '',
    ActivityLevel: '',
    restrictions: ['none'],
    allergens: ['none']
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRestrictionChange = (restriction) => {
    setFormData(prev => {
      if (restriction === 'none') {
        return {
          ...prev,
          restrictions: ['none']
        };
      }
      
      let newRestrictions = prev.restrictions.includes('none') 
        ? [] 
        : [...prev.restrictions];

      if (newRestrictions.includes(restriction)) {
        newRestrictions = newRestrictions.filter(r => r !== restriction);
      } else {
        newRestrictions.push(restriction);
      }
      
      return {
        ...prev,
        restrictions: newRestrictions.length === 0 ? ['none'] : newRestrictions
      };
    });
  };

  const handleAllergenToggle = (allergen) => {
    setFormData(prev => {
      if (allergen === 'none') {
        return {
          ...prev,
          allergens: ['none']
        };
      }

      let newAllergens = prev.allergens.includes('none') 
        ? [] 
        : [...prev.allergens];

      if (newAllergens.includes(allergen)) {
        newAllergens = newAllergens.filter(a => a !== allergen);
      } else {
        newAllergens.push(allergen);
      }

      return {
        ...prev,
        allergens: newAllergens.length === 0 ? ['none'] : newAllergens
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await postCreateNutritionPlan(formData);
      console.log('API Response:', response);

      if(response.EC !== 0) {
        console.error('API Error:', response.EM);
        setError(response.EM);
        toast.error('❌ ' + (response.EM || 'Unknown error'), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        console.log('API Success - Nutrition Plan Data:', response.DT);
        
        if (!response.DT) {
          throw new Error('No nutrition plan data received from API');
        }

        // Log the exact structure of response.DT
        console.log('Response.DT structure:', JSON.stringify(response.DT, null, 2));

        toast.success('🎉 ' + response.EM, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        
        // Navigate to result page with nutrition plan data
        console.log('Navigating to result page with data:', response.DT);
        navigate('/nutrition/result', { 
          state: { 
            nutritionPlan: response.DT.nutritionPlan || response.DT
          }
        });
      }
    } catch (err) {
      console.error('Error:', err);
      setError(err.message || 'Failed to create nutrition plan');
      toast.error('❌ Failed to create nutrition plan: ' + (err.message || 'Unknown error'), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="nutrition-page py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h3 className="mb-0">Create Your Nutrition Plan</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <BasicInfoForm 
                    formData={{
                      Weight: formData.Weight,
                      Height: formData.Height,
                      Age: formData.Age,
                      Gender: formData.Gender,
                      Goal: formData.Goal,
                      ActivityLevel: formData.ActivityLevel
                    }}
                    onInputChange={handleInputChange}
                  />
                  
                  <DietaryRestrictionsForm 
                    selectedRestrictions={formData.restrictions}
                    onRestrictionChange={handleRestrictionChange}
                  />
                  
                  <AllergensForm 
                    selectedAllergens={formData.allergens}
                    onAllergenToggle={handleAllergenToggle}
                  />

                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    className="btn btn-primary w-100"
                    disabled={loading}
                  >
                    {loading ? 'Creating Plan...' : 'Create Nutrition Plan'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionPage;
