((): void => {
    // function data type
    const addNumber = (
        a: number,
        b: number
    ):number => a + b;

    const greet = (
        name: string,
    ):string => 'Hola ' + name;

    const save = () => 'Hi the world is saved';

    //! let myFunction: Function;
    //! let myFunction: (a:number, b:number) => number;
    let myFunction: (a:string) => string;

    //! myFunction = 10;

    //s myFunction = addNumber;
    // console.log(myFunction(1,4));   

    myFunction = greet;
    console.log(myFunction('Johny'));

    // myFunction = save;
    // console.log(myFunction());
    

})()