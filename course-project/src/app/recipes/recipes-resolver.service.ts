import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipes.service";

@Injectable({providedIn: 'root'})
export class RecipeResolverService {
    constructor() {}

    static fetchRecipes: ResolveFn<Recipe[]> = (
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ) => {
        const recipes = inject(RecipeService).getRecipes();
        
        if (recipes.length === 0) {
            return inject(DataStorageService).fetchRecipes();
        } else {
            return recipes;
        }
    }
}