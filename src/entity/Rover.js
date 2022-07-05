const E = 0
const S = 1
const W = 2
const N = 3

class Rover{
    #directions
    constructor(x, y, heading, padX, padY, rovers){
        this.x = x
        this.y = y
        this.heading = heading
        this.padX = padX
        this.padY = padY
        this.rovers = rovers
        this.directions = ['E', 'S', 'W', 'N']
    }
   

    move(){
        if(this.heading === N && this.y < this.padY){
            if(!this.#wouldCollide(this.x, this.y + 1)) {
                this.y++
            }
        } else if(this.heading === W && this.x > 0){
            if(!this.#wouldCollide(this.x - 1, this.y)) {
                this.x--
            }
        }else if(this.heading === S && this.y > 0){
            if(!this.#wouldCollide(this.x, this.y - 1)) {
                this.y--
            }
        }else if(this.heading === E && this.x < this.padX){
            if(!this.#wouldCollide(this.x + 1, this.y)) {
                this.x++
            }
        }
    }

    #wouldCollide(x, y) {
        for(const rover of this.rovers) {
            if(rover.x === x && rover.y === y) {
                return true
            }
        }
        return false
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