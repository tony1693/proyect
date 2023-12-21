import {Professional} from "./proyecto";

const person1 = new Professional("tony",30,80,1.98,false,"Española",0,"Programador");
const person2 =new Professional("Nuria",31,60,1.63,false,"Española",0,"Educadora");


export class Movie {
    public title: string;
    public releaseYear: number;
    public actors: Professional[];
    public nacionality: string;
    public director: Professional;
    public writer: Professional;
    public language: string;
    public plataforma: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string
    public distributor: string;
    public genre:string;

constructor(title:string, releaseYear:number, nacionality:string , genre:string) {
    this.title = title;
    this.releaseYear = releaseYear;
    this.actors = [];
    this.nacionality = nacionality;
    this.director = person1;
    this.writer =  person2;
    this.language = "";
    this.plataforma ="";
    this.isMCU = true || false;
    this.mainCharacterName = "";
    this.producer = "";
    this.distributor = "";
    this.genre = "";
}
attributesShow():void {
    for (let propiedad of Object.keys(Professional)) {
            console.log(propiedad);
            
        }
    }
}
