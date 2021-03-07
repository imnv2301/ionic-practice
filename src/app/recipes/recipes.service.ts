import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://www.jocooks.com/wp-content/uploads/2019/04/pork-schnitzel-1.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkzkfR4vlluR5o_OiXgNWaGOqf1wbfa7klTA&usqp=CAU',
      ingredients: ['Spaghetti', 'Meat', 'Tomatos']
    }
  ]
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }
  getRecipe(id: string){
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === id;
      })
    }
  }
  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
