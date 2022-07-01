const whiteKeys = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const blackKeys = ['s', 'd', 'g', 'h', 'j'];


const keys = document.querySelectorAll(".key");
const wKeys = document.querySelectorAll(".white"); 
const bKeys = document.querySelectorAll(".black"); 

for (let key of keys) {
    key.addEventListener("click", () => {
        playAudio(key);
    });
}

document.addEventListener("keydown",(e)=>{
    if(e.repeat) return;
    const keyPressed =  e.key;
    const whiteKeyIndex = whiteKeys.indexOf(keyPressed);
    const blackKeyIndex = blackKeys.indexOf(keyPressed);

    if(whiteKeyIndex>-1) playAudio(wKeys[whiteKeyIndex]);
    if(blackKeyIndex>-1) playAudio(bKeys[blackKeyIndex]);

})

function playAudio(key) {
    const A = document.getElementById(key.dataset.note);
    A.currentTime = 0;
    A.play();
    key.classList.add("active");
    A.addEventListener("ended",()=>{
        key.classList.remove("active");
    })
}