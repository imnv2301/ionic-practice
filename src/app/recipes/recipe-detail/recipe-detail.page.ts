import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;
  constructor(private activatedRoute: ActivatedRoute,
              private rpService: RecipesService,
              private router: Router,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has("recipeId")){
        //redirect
        this.router.navigate(["/recipes"]);
        return;
      }
      const recipeId = paramMap.get("recipeId");
      this.loadedRecipe = this.rpService.getRecipe(recipeId);
    })
  }
  onDeleteRecipe(){
    this.alertCtrl.create({
      header: 'Delete Recipe!',
      message: 'Do you want to delete ' + this.loadedRecipe.title,
      buttons: ['Cancel', {
        text: 'Confirm',
        handler: () => {
          this.rpService.deleteRecipe(this.loadedRecipe.id);
          this.router.navigate(["/recipes"]);
        }
      }]
    }).then(alertEle => {
      alertEle.present();
    })

  }
  //alert controller

}
