(() => {
    class Avenger {
        constructor(
            public name: string,
            public team: string,
        )
        {
            console.log('Class Constructor')
        }

        private getName(): string
        {
            return this.name;
        }

        get avengerName(): string
        {
            return this.name +' -> '+ this.team;
        }

        set avengerName(name: string)
        {
            this.name = name;
        }
    }

    class Xmen extends Avenger {

        constructor(
            public name: string,
            public team: string,
            public isMutant?: boolean
        )
        {
            super(name, team);  
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan');
    console.log(wolverine);
    console.log(wolverine.avengerName); 

    //Working with getters and setters
    wolverine.avengerName = 'Pedro';
    console.log(wolverine.avengerName);
    
})()