canvas = document.getElementById('myCanvas');

ctx = canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_x=10;
car1_y=50;

car2_width=120;
car2_height=70;
car2_x=10;
car2_y=150;

car1_img="car1.png";
car2_img="car2.webp";
background_img1="https://i.postimg.cc/bv5d35nK/racing.jpg";

function add1() 
{
background_imgTag = new Image();
background_imgTag.onload= uploadBackground1;
background_imgTag.src = background_img1;

car1_imgTag = new Image();
car1_imgTag.onload = uploadcar1;
car1_imgTag.src = car1_img;

car2_imgTag = new Image();
car2_imgTag.onload = uploadcar2;
car2_imgTag.src = car2_img;
}

function uploadBackground1(){
    ctx.drawImage(background_imgTag, 0, 0,canvas.width,canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_imgTag ,car1_x , car1_y , car1_width , car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_imgTag ,car2_x ,car2_y ,car2_width ,car2_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){

keyPressed=e.keyCode;
console.log(keyPressed);

if (keyPressed=='38'){
    car1_up();
    console.log("Up arrow");
}

if (keyPressed=='40'){
    car1_down();
    console.log("Down arrow");
}
if (keyPressed=='39'){
    car1_right();
    console.log("Right arrow");
}
if (keyPressed=='37'){
    car1_left();
    console.log("Left arrow");
}
if (keyPressed=='87'){
    car2_up();
    console.log("w");
}
if (keyPressed=='83'){
    car2_down();
    console.log("s");
}
if (keyPressed=='65'){
    car2_left();
    console.log("a");
}
if (keyPressed=='68'){
    car2_right();
    console.log("d");
}
}