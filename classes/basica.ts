(() => {
    class Avenger {
        //* public name: string;
        //* private team: string;
        //* private power: number;
        public static age: number;

        constructor(
            private name: string,
            private team: string,
            public power?: number,
            age: number = 30
        )
        {
            Avenger.age = age;
        }

        public bio(): string
        {
            return this.name +'->' + this.power
        }
    }

    const antman = new Avenger('Antman', 'Capitan', undefined, 20);

    console.log(antman);
    // we can access to static function or static property without make instance of it
    console.log(Avenger.age);

    console.log(antman.bio());
    
    
    
    
})()