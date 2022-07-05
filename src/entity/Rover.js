const E = 0
const S = 1
const W = 2
const N = 3

class Rover{
    #directions
    constructor(x, y, heading, padX, padY){
        this.x = x
        this.y = y
        this.heading = heading
        this.padX = padX
        this.padY = padY
        this.directions = ['E', 'S', 'W', 'N']
    }
   

    move(){
        if(this.heading === N && this.y < this.padY){
            this.y++
        } else if(this.heading === W && this.x > 0){
            this.x--
        }else if(this.heading === S && this.y > 0){
            this.y--
        }else if(this.heading === E && this.x < this.padX){
            this.x++
        }
    }



   rotateLeft() {
    if(this.heading === 0 ){
        this.heading = 3
    } else {
        this.heading--;
    }
   }

   rotateRight() {
    if(this.heading === 3 ){
        this.heading = 0
    } else {
        this.heading++;
    }
   }



   getHeading(){
    return this.directions[this.heading]
   }
}

module.exports = {Rover, E, S, W, N}