((): void => {

    const fullName = (
        firstName: string,
        ...restArgs: string[]
    ):string => {
        if (!firstName) {
            throw new Error('The first name is required')
        }

        return firstName + ' ' + restArgs.join(' ')
    }

    const nameOne = fullName('Johny', 'Prieto', 'Velasquez');

})()