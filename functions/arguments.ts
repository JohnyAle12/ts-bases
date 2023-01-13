((): void => {

    // About arguments if we want a reqiured argument follow an optional argument, i get an error, this can`t be done

    const fullName = (
        firstName: string,
        lastName?: string,
        isActive: boolean = false
    ):string => {
        if (!firstName) {
            throw new Error('The first name is required')
        }

        return firstName + ' ' + lastName + ' Is Active: ' + isActive;
    }
    
    let noName:any;

    const nameOne = fullName('Johny', 'Prieto');
    // const nameTwo = fullName(noName);
    const nameThree = fullName('Johny', undefined, false);
})()