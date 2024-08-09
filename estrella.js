class Estrella extends Pelota{
    constructor(){
        super();
    }


    dibujar(ctx){
        const a = this.radio * 0.4;
        const b = this.radio * 0.2 ;
        const c = this.radio * 0.7;
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.moveTo(this.centro.x, this.centro.y - this.radio);
        ctx.lineTo(this.centro.x + a, this.centro.y - b);
        ctx.lineTo(this.centro.x + this.radio, this.centro.y - b);
        ctx.lineTo(this.centro.x + a, this.centro.y + b);
        ctx.lineTo(this.centro.x + c, this.centro.y + c);
        ctx.lineTo(this.centro.x, this.centro.y + a);
        ctx.lineTo(this.centro.x - c, this.centro.y + c);
        ctx.lineTo(this.centro.x - a, this.centro.y + b);
        ctx.lineTo(this.centro.x - this.radio, this.centro.y - b);
        ctx.lineTo(this.centro.x - a, this.centro.y - b);
        ctx.lineTo(this.centro.x, this.centro.y - this.radio);
        ctx.strokeStyle = this.colorBorde;
        ctx.fillStyle = this.colorFondo;
        ctx.fill();
        ctx.stroke();
    }
}
