document.addEventListener('DOMContentLoaded',() => {
    let canvas = document.querySelector('#mycanvas');
    let ctx = canvas.getContext('2d');
    let time = 0;

    canvas.width = 500;
    canvas.height = 500;
    
    function draw() {
        // 每畫一次time+1
        time+= 1;

        // 每次畫圖前清除
        ctx.clearRect(0,0,500,500);

        // 底線
        for(var i=0 ; i<10 ; i++) {
            for(var j=0 ; j<10 ; j++) {
                ctx.strokeStyle = 'rgba(0,0,0,0.1)';
                ctx.strokeRect(50*i,50*j,50,50);
                ctx.stroke();

            }
            ctx.fillStyle = 'gray';
            ctx.fillText(50*i,50*i,10); // fillText(text,x,y)
            ctx.fillText(50*i,0,50*i+10);
        }

        // 城堡底
        ctx.beginPath();
        ctx.lineWidth = '2';
        ctx.strokeStyle = 'gray';
        ctx.moveTo(75,400);
        ctx.lineTo(425,400);
        ctx.stroke();
        ctx.closePath();

        ctx.fillStyle = 'mediumaquamarine';
        ctx.lineWidth = '2';
        ctx.strokeStyle = 'gray';
        ctx.fillRect(100,350,50,50);
        ctx.strokeRect(100,350,50,50);

        ctx.fillStyle = 'skyblue';
        ctx.lineWidth = '2';
        ctx.strokeStyle = 'gray';
        ctx.fillRect(150,300,50,100);
        ctx.strokeRect(150,300,50,100);

        ctx.fillStyle = 'skyblue';
        ctx.lineWidth = '2';
        ctx.strokeStyle = 'gray';
        ctx.fillRect(250,300,50,100);
        ctx.strokeRect(250,300,50,100);

        ctx.fillStyle = 'mediumaquamarine';
        ctx.lineWidth = '2';
        ctx.strokeStyle = 'gray';
        ctx.fillRect(300,300,50,100);
        ctx.strokeRect(300,300,50,100);

        ctx.fillStyle = 'pink';
        ctx.lineWidth = '2';
        ctx.strokeStyle = 'gray';
        ctx.fillRect(350,350,50,50);
        ctx.strokeRect(350,350,50,50);

        // 城堡拱門
        ctx.beginPath();
        ctx.moveTo(150,250);
        ctx.lineTo(300,250);
        ctx.lineTo(300,300);
        ctx.lineTo(250,300);
        ctx.arc(225,300,25,0,Math.PI,true);
        ctx.lineTo(150,300);
        ctx.closePath();
        ctx.fillStyle = 'aliceblue';
        ctx.lineWidth = '2';
        ctx.strokeStyle = 'gray';
        ctx.fill();
        ctx.stroke();

        // 城堡三角
        ctx.beginPath();
        ctx.moveTo(150,250);
        ctx.lineTo(225,200);
        ctx.lineTo(300,250);
        ctx.closePath();
        ctx.fillStyle = 'pink';
        ctx.lineWidth = '2';
        ctx.strokeStyle = 'gray';
        ctx.fill();
        ctx.stroke();

        // 城堡旗子
        ctx.beginPath();
        ctx.moveTo(225,200);
        ctx.lineTo(225,100 - mouse.y / 5);
        ctx.lineTo(250,112.5 - (time % 5) - mouse.y / 5);
        ctx.lineTo(225,125 - mouse.y / 5);
        
        ctx.fillStyle = 'yellowgreen';
        ctx.lineWidth = '2';
        ctx.strokeStyle = 'gray';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        // 車子
        let carX = time % 540 - 40; // 超過寬度的500時，取餘數，並且減掉本體寬度

        ctx.fillStyle = 'white';
        ctx.lineWidth = '2';
        ctx.strokeStyle = 'gray';
        ctx.fillRect(carX,375,40,25);
        ctx.strokeRect(carX,375,40,25);

        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.lineWidth = '2';
        ctx.strokeStyle = 'gray';
        ctx.arc(carX+10,400,5,0,Math.PI*2);
        ctx.arc(carX+30,400,5,0,Math.PI*2);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.closePath();
    }

    setInterval(draw,30);

    // 監聽滑鼠移動
    let mouse = {x: 0,y: 0} // 宣告一個物件紀錄滑鼠位置

    canvas.addEventListener('mousemove',(e) => {
        mouse.x = e.offsetX;
        mouse.y = e.offsetY;
    })
})