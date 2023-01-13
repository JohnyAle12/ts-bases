(() => {
    enum AudioLevel {
        min = 5,
        medium,
        max = 'hola'
    }
    
    const currentAudio: AudioLevel = AudioLevel.medium

    console.log(AudioLevel, currentAudio);
    
    
})()