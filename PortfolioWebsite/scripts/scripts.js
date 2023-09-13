"use strict"

var dynamicRotateElements = document.querySelectorAll(".dynamicRotate")

dynamicRotateElements.forEach(function (i) {
    i.addEventListener("mousemove", dynamicRotate)
    i.addEventListener("mouseout" , resetRotate)
})

function dynamicRotate(event) {
    var targetElement = event.target;
    //Get distace from the center of the element
    var mouseX = event.offsetX;
    var mouseY = event.offsetY;
    var elementWidth = targetElement.offsetWidth/2;
    var elementHeight = targetElement.offsetHeight/2;
    var distFromCenterX = mouseX - elementWidth;
    var distFromCenterY = mouseY - elementHeight;
    //Get percent traveled along the element
    var percX = -1*(distFromCenterX/(elementWidth));
    var percY = (distFromCenterY/(elementHeight));
    //Get rotate percentage
    var rotateY = 30 * percX;
    var rotateX = 30 * percY;

    targetElement.style.transform = "rotateY(" + rotateY + "deg) rotateX(" + rotateX + "deg)";
}

function resetRotate(event) {
    var targetElement = event.target;
    targetElement.style.transform = "rotateY(0deg) rotateX(0)";
}
