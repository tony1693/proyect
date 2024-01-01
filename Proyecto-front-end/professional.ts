export class Professional {
    public name: string;
    public age: number;
    public weight: number;
    public height: number;
    public isRetired: boolean;   
    public nationality: string;
    public oscarsNumber: number;
    public profession: string;
    public photo:string;

constructor(name:string , age:number , weight:number , height:number , nationality:string , isRetired:boolean , oscarsNumber:number , profession:string , photo:string) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.isRetired = isRetired;
    this.nationality = nationality;
    this.oscarsNumber = oscarsNumber;
    this.profession = profession;
    this.photo = photo;

}
attributesShow():void {
    for (let propiedad of Object.keys(Professional)) {
            console.log(propiedad);
            
        }
    }
}

