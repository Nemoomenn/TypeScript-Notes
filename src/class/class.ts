// Private Members and class inheritance
class Type {
    private type: string | null = null;

    setType = (type:string) => {
        this.type = type;
        console.log(this.type);
    }
}

class Person extends Type {
    protected age: number = 23;
    constructor (public name: string, public userName: string, private email: string){
        super()
        this.name = name;
        this.userName = userName;
        this.email = email;
    }

    public printAge = () => {
        console.log(this.age);
        this.setType('Young!');
        
    }
}


const person = new Person('Rob', 'rm', 'email');
person.setType('Cool guy'); // Prints: Cool guy
person.printAge();


class Prashant extends Person {
    constructor (userName: string, email: string){
        super('Sudoman', userName, email);
        this.age = 18;
        this.printAge();
    }
}

const prashant = new Prashant('crysp', 'crysp@info.com');
console.log(prashant);

// Getters and Setters
class Plant {
    private _species: string = 'Default';

    get species(){
        return this._species
    }

    set species(value:string){
        if (value.length > 3){
            this._species = value;
        }else{
            this._species = 'Default';
        }
    }

}

const plant = new Plant();
console.log(plant.species); // Prints Default
plant.species = 'AB';
console.log(plant.species); // Prints Default
plant.species = 'Green Plant';
console.log(plant.species); // Prints Green Plant


class Helpers {
    static PI: number = 3.14;
    static calcCircunferance(diameter: number): number {
        return this.PI * diameter;
    }
}

console.log(Helpers.PI);
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircunferance(10));
