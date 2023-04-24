const myCanvas = document.getElementById('my-canvas');
const ctx = myCanvas.getContext('2d');


let newGeneration = Generation.generateRandom(2000, myCanvas.width, myCanvas.height);


console.log(newGeneration)
// const point = {
//     x: 300,
//     y: 300
// }

// setInterval(() => {
   
// },1)

function step(timestamp){
    
    // console.log(timestamp)

    newGeneration.draw(ctx)
    if (newGeneration.isDead()){
        ctx.fillStyle = 'rgba(0,0,0,0.1)'
        ctx.fillRect(0,0, myCanvas.width, myCanvas.height)
        newGeneration = Generation.generateRandom(100, myCanvas.width, myCanvas.height);
    }
    window.requestAnimationFrame(step)
}

window.requestAnimationFrame(step)
// setInterval(() =>{

//     const randomX = (Math.random()*2) -1;
//     const randomY= (Math.random()*2) -1;


//     ctx.fillStyle = 'red'
//     ctx.fillRect(point.x, point.y, 2,2)
//     point.x += randomX;
//     point.y += randomY;
// },1)




// for (let i = 0; i < 100; i++) {
//     // const point = {
//     //     x: 300,
//     //     y: 300
//     // }

//     const point = Point.generateRandom(myCanvas.width,myCanvas.height)

//     setInterval(() => {
//         point.draw(ctx);
//         point.changePosition();

    
    
//     }, 1)
// }