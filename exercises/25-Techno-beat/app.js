function lyricsGenerator(arr) {
    let lyric = ""
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == 0){
            lyric += "Boom "
            count = 0
        } else if(arr[i] == 1) {
            lyric += "Drop the bass "
            count += 1

            if(count === 3) {
                lyric += "!!!Break the bass!!! "
            }
        }
    }
    
    return lyric
}


// Don't change anything below this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))
