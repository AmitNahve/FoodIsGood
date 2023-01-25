export default class Recipe {
    id: number;
    name: string;
    ingredients: string[];
    description: string;
    levelOfDifficulty: number;
    preparationTime: number;
    publishDate: Date;
    image: string;

    constructor(id: number, name: string, ingredients: string[], description: string, levelOfDifficulty: number, publishDate: Date = new Date(), image: string, preparationTime: number) {
        this.id = id;
        this.name = name;
        this.ingredients = ingredients;
        this.levelOfDifficulty = levelOfDifficulty;
        this.description = description;
        this.publishDate = publishDate;
        this.image = image;
        this.preparationTime = preparationTime;
    }
}