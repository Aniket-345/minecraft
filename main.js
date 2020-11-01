


var canvas=new fabric.Canvas("my_canvas");
player_x=10;
player_y=10;

block_width=30;
block_height=30;

var player_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        console.log(player_object);
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

    });

}
function block_update(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    key_pressed=e.keyCode;
    console.log(key_pressed);

    if(key_pressed=="38"){
        up()
        console.log("up")
    }
    if(key_pressed=="40"){
        down()
        console.log("down")
    }
    if(key_pressed=="37"){
        left()
        console.log("left")
    }
    if(key_pressed=="39"){
        right()
        console.log("right")
    }
    if(e.shiftKey==true && key_pressed=='80' ){
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;

    }
    if(e.shiftKey==true && key_pressed=='77'){
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(key_pressed=="67"){
        block_update('cloud.jpg');
        console.log("c");

    }
    if(key_pressed=="68"){
        block_update('dark_green.png');
        console.log("d")
    }
    if(key_pressed=="71"){
        block_update('ground.png');
        console.log("g");
    }
    if(key_pressed=="76"){
        block_update('light_green.png');
        console.log("l")
    }
    if(key_pressed=='82'){
        block_update('roof.jpg');
        console.log('r')
    }
    if(key_pressed=='84'){
        block_update('trunk.jpg');
        console.log('t')
    }
    if(key_pressed=="85"){
        block_update('unique.png');
        console.log("u")
    }
    if(key_pressed=='87'){
        block_update("wall.jpg");
        console.log('w');
    }
    if(key_pressed=="89"){
        block_update('yellow_wall.png');
        console.log('y')
    }
}
function up(){
    if(player_y>=0){
        player_y=player_y-block_height;
        console.log(player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y<=450){
        player_y=player_y+block_height;
        console.log(player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x>=0){
        player_x=player_x-block_height;
        console.log(player_x);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x<=750){
        player_x=player_x+block_height;
        console.log(player_x);
        canvas.remove(player_object);
        player_update();
    }
}