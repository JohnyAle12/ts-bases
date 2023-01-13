(() => {
    // we van use private constructoresfor implement singleton pattern
    class Mutante {
        static instance : Mutante;
        private constructor(public name: string) {}

        static callMutante(): Mutante
        {
            if (!Mutante.instance) {
                Mutante.instance = new Mutante('Hi, I am a only instance');
            }

            return Mutante.instance;
        }

        changeName(name: string)
        {
            this.name = name;
        }

    }


    const wolverine = Mutante.callMutante();
    const pedro = Mutante.callMutante();

    wolverine.changeName('Holaaa trato de cambiar solo a wolverine');

    console.log(wolverine, pedro);
    
})()