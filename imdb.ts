import { Movie } from "./movie";


const pelicula1 = new Movie("fast and furius" , "Estadounidense");
const pelicula2 = new Movie("Trainig day","Action");

export class Imdb {
    public peliculas:Movie[];
constructor(peliculas:[]) {
    this.peliculas = [];
    }
 
}
