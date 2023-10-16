import { NgModule } from "@angular/core";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesStartComponent } from "./recipes-start/recipes-start.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipesComponent } from "./recipes.component";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        RecipesStartComponent,
        RecipeEditComponent
    ],
    exports: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        RecipesStartComponent,
        RecipeEditComponent
    ]
})
export class RecipesModule {

}