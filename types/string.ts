(() => {
    const batman = 'Batman';

    // we can use the null check (?) to avoid an error
    console.log(batman[10]?.toUpperCase() || 'There is no letter');
    
})()