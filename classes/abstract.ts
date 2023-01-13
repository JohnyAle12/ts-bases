(() => {
    abstract class Mutante {
        constructor(
            public name: string,
            public team: string,
        )
        {
        }

        getMutanteName():string
        {
            return 'Holaaaaa';
        }

    }

    class Xmen extends Mutante{
        getMutanteName(){
            return 'Hola, ' + this.name;
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan');

    const printName = ( mutante: Mutante ) => {
        console.log(mutante.getMutanteName());
    }

    printName(wolverine);
    
    
})()