/**
 * Animation blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace customblinker {
    /**
     *this is a test extension
     * x=x coordinate
     y=ycoordinate
     inerval=flash interval
     */
    //% block="blink x $x y $y every $interval ms"
    export function blink(x: number, y: number, interval: number): void {
        let sprite = game.createSprite(x, y)
        sprite.setBlink(interval)
        sprite.blink()
        
    }
}
