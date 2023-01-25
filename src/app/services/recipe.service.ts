import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Recipe from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {


  constructor(private httpService: HttpClient) {
  }
  get(){
      return this.httpService.get("http://localhost:4100/recipes");
  }

  getById(id: number){
      return this.httpService.get("http://localhost:4100/recipes/" + id);
  }

  post(recipe: Recipe){
      return this.httpService.post("http://localhost:4100/recipes", recipe);
  }

  delete(id: any){
      return this.httpService.delete("http://localhost:4100/recipes/" + id);
  }

  put(recipe: Recipe){
      return this.httpService.put("http://localhost:4100/recipes/" + recipe.id, recipe);
  }
}
