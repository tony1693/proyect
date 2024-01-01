import {Professional} from "../professional";

const person1 = new Professional("tony",30,80,1.98,"Española",false,0,"Actor", "./JIM-CARREY.jpg");
const person2 =new Professional("Nuria",31,60,1.63,"Española",false,0,"Actriz","./Jenifer-Aniston.webp");


export class Movie {
    public title: string;
    public releaseYear: number;
    public actors: [];
    public nacionality: string;
    public director: string;
    public writer: string;
    public language: string;
    public plataforma: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string
    public distributor: string;
    public genre:string;
    public photo:string;
    public id:number;

constructor(title:string, photo:string, id:number) {

    this.title = title;
    this.releaseYear = 0;
    this.actors = [];
    this.nacionality = "";
    this.director = "";
    this.writer =  "";
    this.language = "";
    this.plataforma ="";
    this.isMCU = true || false;
    this.mainCharacterName = "";
    this.producer = "";
    this.distributor = "";
    this.genre = "";
    this.photo = photo;
    this.id = id;
}
attributesShow():void {
    for (let propiedad of Object.keys(Professional)) {
            console.log(propiedad);
            
        }
    }
}
