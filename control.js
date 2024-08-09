let peloticas = [];
let canvas = null;
let ctx = null;
const gravedad = 0.5;
const numPelotas = 10;

window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = this.canvas.getContext("2d");
    for (let i = 0; i < numPelotas; i++){
        peloticas.push(new Pelota())
        peloticas.push(new Cuadrado())
        peloticas.push(new Triangulo())
        peloticas.push(new Estrella())
    }
    animar();
}

function animar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    peloticas.forEach(peloticas => {
        peloticas.dibujar(ctx);
        peloticas.actualizar(gravedad);
    });
    requestAnimationFrame(animar);
}

