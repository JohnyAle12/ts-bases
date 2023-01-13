(() => {
    const numbers: (string | number | boolean)[] = [1,2,3,'4',5];
    const numbersTwo: number[] = [1,2,3,5];
    
    numbers.push(true);

    console.log(numbers);
    const villians: string[] = ['Omega', 'Duende', 'Dormamu'];

    villians.forEach( villan => console.log( villan.toUpperCase() ))
    
})()