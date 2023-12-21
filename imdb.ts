import { Movie } from "./movie";


const pelicula1 = new Movie("fast and furius" , 2000, "Estadounidense","Action");
const pelicula2 = new Movie("Trainig day",1995,"Estadounidense","Action");

export class Imdb {
    public peliculas:Movie[];
constructor(peliculas:[]) {
    this.peliculas = [];
    }
 
}
