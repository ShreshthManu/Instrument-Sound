let btnlength = document.querySelectorAll(".drum").length;
// for(let btn of btns)
//     btn.addEventListener("click",function(){
//         alert(`${btn} was clicked`);
//     })
for(let i = 0; i<btnlength;i++){
    let btn = document.querySelectorAll(".drum");
    btn[i].addEventListener("click",function(){
        console.log("clicked");
        
        let key = this.innerHTML;
        makesound(key); 
        buttonAnimation(key);

    });
}

document.addEventListener("keypress",function(event){

    makesound(event.key);
    buttonAnimation(event.key);

});

function makesound(key){
    switch(key){
            case "w":
                let tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                let tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                let tom3 = new Audio("sounds/tom-2.mp3");
                tom3.play();
                break;
            case "d":
                let tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                let crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "k":
                let kick_bass = new Audio("sounds/kick-bass.mp3");
                kick_bass.play();
                break; 
            case "l":
                let snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
        }
}

function buttonAnimation(key){
    let btn = document.querySelector("."+key);
    btn.classList.add("pressed");

    setTimeout(function(){
        btn.classList.remove("pressed");
    },100);

}