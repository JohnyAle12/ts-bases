(() => {
    class Avenger
    {
        name;
        power;
        constructor( name = 'No name', power = 1 )
        {
            this.name = name;
            this.power = power;
        }
    }

    class FlyingAvenger extends Avenger
    {
        weapons;
        constructor( name = 'No name', power = 1, weapons = [])
        {
            super(name, power);
            this.weapons = weapons;
        }
    }

    const avengerOne = new Avenger('Johny', 100);
    const avengerTwo = new FlyingAvenger('Alejo', 200, ['pistol', 'hammer']);

    console.log(avengerOne, avengerTwo);
})()