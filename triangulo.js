class Triangulo extends Pelota{
    constructor(){
        super();
    }
    dibujar(ctx){
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.moveTo(this.centro.x, this.centro.y);
        ctx.lineTo(this.centro.x + this.radio, this.centro.y + this.radio);
        ctx.lineTo(this.centro.x - this.radio, this.centro.y + this.radio);
        ctx.lineTo(this.centro.x, this.centro.y);
        ctx.strokeStyle = this.colorBorde;
        ctx.fillStyle = this.colorFondo;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
}
