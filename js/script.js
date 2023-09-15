const cursor = document.querySelector(".cursor");
var timeout;
//follow with mouse pointer
document.addEventListener("mousemove", (e) =>{
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";
    cursor.style.position = "absolute";

    function mouseStopped(){
        cursor.style.display="none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 3000);
});

//cursor effect on mouseout
document.addEventListener("mouseout", () =>{
    cursor.style.display="none";
});