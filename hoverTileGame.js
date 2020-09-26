let targetBoard = []

let playerBoard = []

tBoardExists = false

let tilesStyles = ['squareWhite tile', 'squareBlack tile']

function createTBoard() {
    
    for (x = 0; x < 64; x++) {
        if (tBoardExists === true) {break}
        let el = document.createElement('div')
        el.innerText=x
        el.className = 'squareBlack tile'

        playerBoard[x] = 'b'
        
        document.getElementById('board').appendChild(el)        
    }

    tBoardExists = true    

}

function createTargetBoard(){

    colorPointers = ['w', 'b']    

    for (x = 0; x < 64; x++) {        
                
        if (x%2 === 0) {
            let el = document.createElement('div')
            el.innerText=x
            el.className = tilesStyles[0]
            targetBoard[x] = colorPointers[0]
        
            document.getElementById('targetBoard').appendChild(el)

        } else if (x%2 === 1) {

            let el = document.createElement('div')
            el.innerText=x
            el.className = tilesStyles[1]
            targetBoard[x] = colorPointers[1]
        
            document.getElementById('targetBoard').appendChild(el)
        }

        if ((x+1)%8 === 0){
            temp0 = tilesStyles[0]
            temp1 = tilesStyles[1]
            tilesStyles = [temp1, temp0]

            colorTemp0 = colorPointers[0]
            colorTemp1 = colorPointers[1]
            colorPointers = [colorTemp1, colorTemp0]
        }
        
        console.log(targetBoard[x])
                    
    }
}

function play(){
    $(".tile").mouseover(function(){

        if ($(this).hasClass("squareBlack")){
            $(this).toggleClass("squareBlack", false)
            $(this).toggleClass("squareWhite", true)

            playerBoard[this.innerText] = 'w'
            console.log(playerBoard[this.innerText])
         } 
        else if ($(this).hasClass("squareWhite")){
            $(this).toggleClass("squareWhite", false)
            $(this).toggleClass("squareBlack", true)

            playerBoard[this.innerText] = 'b'
            console.log(playerBoard[this.innerText])
        }

        checkForVictory = true

        for (var i = 0; i<playerBoard.length; i++){
            if (playerBoard[i] != targetBoard[i]){checkForVictory = false}
        }

        if (checkForVictory){
            $('#description').text("Gratulacje! Wygrales!")
            $(".tile").off()
            $("#description").css({
                "background-color":"limegreen", 
                "padding":"25px",
                "border-radius":"10px 10px 10px 10px"
            })
        }
    }) 
}

function theGame(){
    createTBoard()
    play()
    createTargetBoard()
}