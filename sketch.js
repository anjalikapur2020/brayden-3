var bg,waitimg,play,about,home,restartimg,playerimg
var gameState="wait"
var logo

function preload(){
waitimg=loadImage("bga.png")
playimg=loadImage("barrenland.jpg")
aboutimg=loadImage("bga.jpg")
aboutpopimg=loadImage("popupzombie.png")
endbg=loadImage("zombiewin.gif")
restartimg=loadImage("restart.png")
playerimg=loadImage("shooter_1.png")

//zombie1img=loadImage("zombie.png")

}

function setup(){
    createCanvas(displayWidth,displayHeight)
    //zombie1=createSprite(windowWidth/2,windowHeight/2,400,400)
    //zombie1.addImage(zombie1img)
    //zombie1.visible=false


logo=createImg("logo.png")
logo.position(windowWidth/2-250,0)
logo.size(500,500)


play=createImg("play.png")
play.position(50,20)
play.size(100,100)

about=createImg("about2.png")
about.position(50,120)
about.size(100,100)


home=createImg("back.png")
home.position(50,windowHeight-100)
home.size(100,100)
home.hide()

popup1=createSprite(windowWidth/2,windowHeight/2)
popup1.addImage(aboutpopimg)
popup1.visible=false
popup1.scale=1.5


zombie1=createSprite(windowWidth/2,windowHeight/2)
zombie1.addImage(playerimg)
zombie1.scale=0.5
zombie1.visible=false

}

function draw(){

    if (gameState==="wait"){
    background(waitimg)
   // zombie1.visible=false
   popup1.visible=false
   zombie1.visible=false
logo.visible=true

}

if(play.mousePressed(()=>{
gameState="play"
//zombie1.visible=true
home.show()


}))


if(home.mousePressed(()=>{
    gameState="wait"
    }))

if(about.mousePressed(()=>{
    gameState="about"
    //popup1.visible=true

    }))

if(gameState==="play"){
    zombie1.velocityX=0
//background("yellow")
image(playimg,0,0,2*windowWidth,2*windowHeight)
logo.hide()
popup1.visible=false
zombie1.visible=true




}

//camera.position.x=zombie1.position.x

if(keyDown("RIGHT_ARROW")){
  zombie1.x +=3
  camera.x=zombie1.x
  camera.y=zombie1.y
}

if(keyDown("DOWN_ARROW")){
    zombie1.y +=3
    camera.x=zombie1.x
    camera.y=zombie1.y
  }

if(gameState==="about"){
   // background(aboutimg)}

   popup1.visible=true
   logo.hide()


   
    }
    drawSprites()
}



