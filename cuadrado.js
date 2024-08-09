class Cuadrado extends Pelota {
    constructor(){
        super();
    }
    dibujar(ctx){
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.rect(this.centro.x, this.centro.y, this.radio, this.radio);
        ctx.strokeStyle = this.colorBorde;
        ctx.fillStyle = this.colorFondo;
        ctx.fill();
        ctx.stroke();
    }
}