let targetBoard = []
let playerBoard = []

let tilesStyles = ['squareWhite tile', 'squareBlack tile']
let colorPointers = ['w', 'b']

function swapTiles(){

    temp0 = tilesStyles[0]
    temp1 = tilesStyles[1]
    tilesStyles = [temp1, temp0]

}

function swapColorPointers(){
    
    colorTemp0 = colorPointers[0]
    colorTemp1 = colorPointers[1]
    colorPointers = [colorTemp1, colorTemp0]

}

function checkGameStatus(){

    checkForVictory = true

        for (var i = 0; i < playerBoard.length; i++) {

            if (playerBoard[i] != targetBoard[i]) {

                checkForVictory = false
                break

            }
        }

        if (checkForVictory) {
            
            $(".tile").off()
            $("#description > span").text("Gratulacje! Wygrales!").css({"background": "#3ac928"})
            $("#site").css("background", "radial-gradient(circle, rgba(140,255,54,1) 0%, rgba(126,255,124,1) 100%)")

        }

}

function createTilesBoard() {

    for (x = 0; x < 64; x++) {

        $("#board").append(`<div class="${tilesStyles[1]}">${x}</div>`)
        playerBoard[x] = 'b'

    }
}

function createTargetBoard() {    

    for (x = 0; x < 64; x++) {

        if (x % 2 === 0) {     

            $("#targetBoard").append(`<div class="${tilesStyles[0]}">${x}</div>`)
            targetBoard[x] = colorPointers[0]

        } else if (x % 2 === 1) {

            $("#targetBoard").append(`<div class="${tilesStyles[1]}">${x}</div>`)
            targetBoard[x] = colorPointers[1]

        }

        if ((x + 1) % 8 === 0) {
            
            swapTiles()
            swapColorPointers()
            
        }
    }
}



function play() {
    
    $(".tile").mouseover(function () {

        if ($(this).hasClass("squareBlack")) {

            $(this).toggleClass("squareBlack", false)
            $(this).toggleClass("squareWhite", true)

            playerBoard[this.innerText] = 'w'            

        } else if ($(this).hasClass("squareWhite")) {

            $(this).toggleClass("squareWhite", false)
            $(this).toggleClass("squareBlack", true)

            playerBoard[this.innerText] = 'b'            

        }

        checkGameStatus()
    })
}

function theGame() {
    createTilesBoard()
    play()
    createTargetBoard()
}