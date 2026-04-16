import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { saveRecipe } from '../../services/recipeService';
import type { MealAPI, Ingredient, Step } from '../../types/meal';
import './RecipeEditor.css';

const RecipeEditor = () => {
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [timeEstimate, setTimeEstimate] = useState('');
  const [category, setCategory] = useState('Chicken');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState('');
  
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { name: '', quantity: '', measure: '' }
  ]);
  
  const [steps, setSteps] = useState<Step[]>([
    { text: '', image: '' }
  ]);

  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', quantity: '', measure: '' }]);
  };

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const updateIngredient = (index: number, field: keyof Ingredient, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = { ...newIngredients[index], [field]: value };
    setIngredients(newIngredients);
  };

  const addStep = () => {
    setSteps([...steps, { text: '', image: '' }]);
  };

  const removeStep = (index: number) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  const updateStep = (index: number, value: string) => {
    const newSteps = [...steps];
    newSteps[index] = { ...newSteps[index], text: value };
    setSteps(newSteps);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePublish = () => {
    if (!title) {
      alert('Please at least give your recipe a title!');
      return;
    }

    const newRecipe: MealAPI = {
      idMeal: Date.now().toString(),
      strMeal: title,
      strMealThumb: coverImage || 'https://via.placeholder.com/300?text=No+Image',
      strCategory: category,
      timeEstimate,
      ingredients,
      steps,
      description
    };

    saveRecipe(newRecipe);
    navigate('/recipes');
  };

  return (
    <div className="recipes-container">
      <Navbar />
      
      <main className="recipe-editor-container">
        <header className="editor-header">
          <h1>Upload recipe</h1>
          <p>Fill out the form below to share your culinary creation with the world.</p>
        </header>

        <section className="form-grid">
          <div className="form-group">
            <label className="form-label">Title</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Write a fitting title for your recipe"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Time estimate</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g. 45 mins"
              value={timeEstimate}
              onChange={(e) => setTimeEstimate(e.target.value)}
            />
          </div>

          <div className="image-upload-section">
            <label className="form-label">Cover Image</label>
            <div 
              className="image-placeholder"
              onClick={() => document.getElementById('cover-upload')?.click()}
            >
              {coverImage ? (
                <img src={coverImage} alt="Preview" className="image-preview" />
              ) : (
                <>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>Click to add cover image</span>
                </>
              )}
            </div>
            <input 
              id="cover-upload"
              type="file" 
              hidden 
              accept="image/*" 
              onChange={handleImageChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Category</label>
            <select 
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Chicken">Chicken</option>
              <option value="Beef">Beef</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Dessert">Dessert</option>
              <option value="Pasta">Pasta</option>
              <option value="Seafood">Seafood</option>
            </select>
          </div>
        </section>

        <section className="ingredients-section">
          <div className="section-title">
            <h2>Ingredients</h2>
            <button className="btn-add-item" onClick={addIngredient}>
              + Add ingredient
            </button>
          </div>
          
          {ingredients.map((ing, index) => (
            <div key={index} className="ingredient-row">
              <input 
                type="text" 
                className="form-input" 
                placeholder="Ingredient name" 
                value={ing.name}
                onChange={(e) => updateIngredient(index, 'name', e.target.value)}
              />
              <input 
                type="text" 
                className="form-input" 
                placeholder="Qty" 
                value={ing.quantity}
                onChange={(e) => updateIngredient(index, 'quantity', e.target.value)}
              />
              <input 
                type="text" 
                className="form-input" 
                placeholder="Measure" 
                value={ing.measure}
                onChange={(e) => updateIngredient(index, 'measure', e.target.value)}
              />
              {ingredients.length > 1 && (
                <button className="btn-remove" onClick={() => removeIngredient(index)}>
                  ✕
                </button>
              )}
            </div>
          ))}
        </section>

        <section className="steps-section">
          <div className="section-title">
            <h2>Preparation Steps</h2>
            <button className="btn-add-item" onClick={addStep}>
              + Add new step
            </button>
          </div>

          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <span className="step-number">Step {index + 1}</span>
              <textarea 
                className="form-textarea" 
                rows={3}
                placeholder="Describe this step..."
                style={{ width: '100%' }}
                value={step.text}
                onChange={(e) => updateStep(index, e.target.value)}
              />
              <div className="step-actions">
                {steps.length > 1 && (
                  <button className="btn-remove" onClick={() => removeStep(index)}>
                    Remove Step
                  </button>
                )}
              </div>
            </div>
          ))}
        </section>

        <section className="form-group" style={{ marginBottom: '40px' }}>
          <label className="form-label">Description</label>
          <textarea 
            className="form-textarea" 
            rows={4}
            placeholder="Write a fitting description for your recipe..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </section>

        <footer className="editor-footer">
          <button className="btn-cancel" onClick={() => navigate('/recipes')}>
            Cancel
          </button>
          <button className="btn-publish" onClick={handlePublish}>
            Post recipe
          </button>
        </footer>
      </main>
    </div>
  );
};

export default RecipeEditor;
