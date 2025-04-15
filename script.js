const canvas=document.getElementById("mcanvas");
const ctx=canvas.getContext("2d");

ctx.letterSpacing="50px";
ctx.font = "bold 40px serif";
ctx.strokeText("Este es un texto", 50,50);

//Dibujo
ctx.lineWidth = 5;

ctx.beginPath();
ctx.lineTo(60,200);
ctx.lineTo(60,190);
ctx.lineTo(80,180);
ctx.lineTo(150,160);
ctx.lineTo(230,160);
ctx.lineTo(300,190);
ctx.lineTo(200,210);
ctx.lineTo(100,210);
ctx.lineTo(60,200);
ctx.stroke();

ctx.beginPath();
ctx.lineTo(300,200);
ctx.lineTo(200,220);
ctx.lineTo(100,220);
ctx.stroke();

ctx.beginPath()
ctx.arc(170,170,39,0, Math.PI);
ctx.stroke();
