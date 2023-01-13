((): void => {
    let flash: {
        name:string,
        age:number,
        powers: string[],
        getPowers?: () => string[]
    } = {
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

    //! console.log( flash.getPowers() );
    console.log( flash.getPowers && flash.getPowers() );
    
})()