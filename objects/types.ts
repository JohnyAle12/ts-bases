((): void => {
    type SuperHero = {
        name:string,
        age:number,
        powers: string[],
        getPowers?: () => string[]
    }

    let flash: SuperHero = {
        name: 'Barry Alen',
        age: 24,
        powers: ['Volar', 'Caminar']
    }

    flash = {
        name: 'Barry Homer',
        age: 24,
        powers: ['Volar'],
        getPowers() {
            return this.powers;
        }
    }

    console.log( flash.getPowers && flash.getPowers() );

    let myCustomHero: (string | SuperHero) = 'Johny'
    console.log(myCustomHero);
    
    
})()