function ola() { alert("ola")
}

function mouseOnGrey(event) {
    event.style.backgroundColor = "rgb(90, 90, 90)";
    event.style.color = "white";
      
}

function mouseOffBlack(event) {
    event.style.backgroundColor = "black";
    event.style.color = "rgb(112, 112, 111)";
}


function mouseOnInput(event) {
    event.style.backgroundColor = "rgb(90, 90, 90)";
      
}

function mouseOffInput(event) {
    event.style.backgroundColor = "rgb(200, 200, 200)";
    
}

function mouseOnBlackBtn(event) {
    event.style.backgroundColor = "white";
    event.style.color = "black"
      
}

function mouseOffBlackBtn(event) {
    event.style.backgroundColor = "black";
    event.style.color = "white"
    
}

function mouseOnUnderline(event) {
    event.style.textDecoration="underline"
      
}

function mouseOffUnderline(event) {
    event.style.textDecoration="none"
    
}

function imageStretchOn(event) {
    event.width += 10;
    event.height += 10;
}

function imageStretchOff(event) {
    event.width -= 10;
    event.height -= 10;
}

