((): void => {
    
    interface Client {
        name: string;
        age?: number;
        address?: Address
        getFullAddress?(id:number): void
    }

    interface Address {
        id: number,
        cityCode: number,
        city: string
        desc: string
    }


    const client: Client = {
        name: 'Johny',
        age: 25,
        address: {
            id: 125,
            cityCode: 3,
            city: 'Bogota',
            desc: 'Calle 1234'
        },
        
    }

    const clientTwo: Client = {
        name: 'Johny',
        age: 25,
    }
    
    
})()