((): void => {
    
    interface Client {
        name: string;
        getFullAddress(id:number): string
    }

    interface Address extends Client {
        id: number,
        city: string
    }

    class Person implements Address{
        constructor(
            public name: string,
            public id: number,
            public city: string
        ){}

        getFullAddress(id:number): string
        {
            return 'Calle 123'+id;
        }
    }

    const person = new Person('johny', 12, 'Bogota');
    console.log(person.getFullAddress(4));
    
    
    
})()