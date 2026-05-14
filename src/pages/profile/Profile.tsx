import { useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout as logoutAction } from '../../store/slices/userSlice';
import { fetchRecipesAsync } from '../../store/slices/recipesSlice';
import { MealCard } from '../../components/cards.meal/Card.meal';
import { RecipeInfo } from '../../components/recipe.info/RecipeInfo';
import type { RootState, AppDispatch } from '../../store';
import type { MealAPI } from '../../types/meal';
import './Profile.css';
import { signOut } from "firebase/auth"
import { auth } from "../../firebase/config"


const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { name, profilePic, diet, skillLevel } = useSelector((state: RootState) => state.user);
  const { items: recipes } = useSelector((state: RootState) => state.recipes);
  const [selectedMeal, setSelectedMeal] = useState<MealAPI | null>(null);

  useEffect(() => {
    dispatch(fetchRecipesAsync(''));
  }, [dispatch]);

  const myRecipes = recipes.filter((meal) => meal.idMeal.length > 10);

  const handleLogout = () => {
    dispatch(logoutAction());
    signOut(auth)
    navigate("/");
  };

  return (
    <div className="profile-container">
      <Navbar />
      
      <main className="profile-card">
        <div className="user-info">
          {profilePic ? (
            <img src={profilePic} alt={name} className="profile-avatar" />
          ) : (
            <div className="avatar-placeholder">{name.charAt(0)}</div>
          )}
          
          <div className="user-details">
            <h2>{name}</h2>
            <p className="user-stats">🍳 Recipes Uploaded: <strong>{myRecipes.length}</strong></p>
            <p className="user-preferences">🥗 Diet: <strong>{diet}</strong> | 👨‍🍳 Skill: <strong>{skillLevel}</strong></p>
            
            <p style={{ marginTop: '15px', color: '#444' }}>
              Home cook passionate about healthy recipes and meal planning.
            </p>
          </div>
        </div>

        <div className="profile-actions">
          <button className="btn-edit" onClick={() => navigate("/profile/edit")}>Edit Profile</button>
          <button className="btn-logout" onClick={handleLogout}>Log out</button>
        </div>
      </main>

      <section className="my-recipes-section">
        <h3 className="my-recipes-title">My Recipes</h3>
        {myRecipes.length > 0 ? (
          <div className="my-recipes-grid">
            {myRecipes.map((meal) => (
              <MealCard key={meal.idMeal} meal={meal} onClick={() => setSelectedMeal(meal)} />
            ))}
          </div>
        ) : (
          <div className="empty-recipes">
            <p>No recipes found. Try adding your own!</p>
            <button className="btn-edit" onClick={() => navigate('/recipes/add')}>+ Add Recipe</button>
          </div>
        )}
      </section>

      {selectedMeal && (
        <RecipeInfo 
          meal={selectedMeal} 
          onClose={() => setSelectedMeal(null)} 
        />
      )}
    </div>
  );
};

export default Profile;