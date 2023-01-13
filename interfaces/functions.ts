((): void => {
    
    interface TwoNumbers {
        (a:number, b:number): number;
    }

    let addNumbers: TwoNumbers;

    addNumbers = (a:number, b:number): number => {
        return a + b;
    }

    
    
    
})()