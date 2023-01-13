(() => {
    const callSuperMan = (message: string): never => {
        throw new Error(message);
    }
    
    // callSuperMan('We are die')
    
})()