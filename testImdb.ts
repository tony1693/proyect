
import { Movie } from "./movie";
const pelicula1 = new Movie("fast and furius" , 2000, "Estadounidense","Action");
const pelicula2 = new Movie("Trainig day",1995,"Estadounidense","Action");

import {Imdb} from "./imdb";
const dateBase = new Imdb([]);
const fs = require ("fs");
const fileJ = "imdbBBDD.json";
const converString = JSON.stringify(dateBase);
console.log(converString);
fs.writeFileSync(fileJ, converString);
const readDate = fs.readFileSync(fileJ,"utf8");
const storeDate = JSON.parse(readDate);
