import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeItemComponent } from './components/recipes/recipe-item/recipe-item.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './components/recipes/recipe-details/recipe-details.component';
import { AddNewRecipeComponent } from './components/recipes/add-new-recipe/add-new-recipe.component';
import { MaterialModule } from './material/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    AddNewRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
