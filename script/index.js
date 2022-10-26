let inputDir={
    x:0,
    y:0
}
let speed=2;
let lastpainttime=0;
let snakearr=[
    {
        x:10,
        y:10
    }
]
let food={x:15,y:15}
function main(currtime){
     window.requestAnimationFrame(main);
if((currtime-lastpainttime)/1000<1/speed) {
    return ;
}
lastpainttime=currtime;
 console.log(currtime);
gamestart();
}
function gamestart(){
    if(dispatchEvent(snakearr)){
        inputDir={x:0,y:0}
    }
    


 document.getElementById("display").innerHTML="";
 snakearr.map(function (el,index) {
    let div=document.createElement('div');
    div.style.gridRowStart=el.y;
    div.style.gridColumnStart=el.x;
    div.classList="food"
    div.setAttribute('class','food');
    document.getElementById("display").append(div)
    
 });
 let div1=document.createElement('div');
    div1.style.gridRowStart=food.y;
    div1.style.gridColumnStart=food.x;
    div1.classList="food1"
    div1.setAttribute('class','food1');
    document.getElementById("display").append(div1)
 
}
window.requestAnimationFrame(main);


window.addEventListener('keydown', e=>{
    inputDir={x:0,y:1}

    switch(e.key){
        case "ArrowUp":
            inputDir.x=0;
            inputDir.y=-1;
            break;
        case "ArrowDown":
            inputDir.x=0
            inputDir.y=1
            break;
        case "ArrowLeft":
            inputDir.x=1
            inputDir.y=0
            break;
        case "ArrowRight":
            inputDir.x=-1
            inputDir.y=0
            break;
    }
})