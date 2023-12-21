export class Professional {
    public name: string;
    public age: number;
    public weight: number;
    public height: number;
    public isRetired: boolean;   
    public nationality: string;
    public oscarsNumber: number;
    public profession: string;

constructor(name , age , weight , height , nationality , isRetired , oscarsNumber , profession) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.isRetired = isRetired;
    this.nationality = nationality;
    this.oscarsNumber = oscarsNumber;
    this.profession = profession;

}
attributesShow():void {
    for (let propiedad of Object.keys(Professional)) {
            console.log(propiedad);
            
        }
    }
}

