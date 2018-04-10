import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected  = new EventEmitter<Recipe>();
  recipes : Recipe[] =[
    new Recipe("A Test Recipe","This is simply test","https://images-gmi-pmc.edge-generalmills.com/8c70298f-7556-428a-a0d4-56e97ea3b4b0.jpg"),
    new Recipe("Another Test Recipe","This is simply test","https://images-gmi-pmc.edge-generalmills.com/8c70298f-7556-428a-a0d4-56e97ea3b4b0.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }
  
  OnRecipeSelecting(recipe:Recipe){
    console.log(recipe)
      this.recipeWasSelected.emit(recipe);
  }
}
