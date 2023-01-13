(() => {
    let avenger: any = 123

    avenger = 'Gorilla';
    console.log(avenger.charAt(0));

    avenger = 2333
    console.log(avenger.toFixed(2));


    avenger = 'Dr Strange';
    //casteo de datos
    console.log( (avenger as string).charAt(0));

    avenger = 555
    //casteo de datos
    console.log(<number>avenger.toFixed(2));
    
    
})()