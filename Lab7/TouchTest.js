function is_touch_device()
{
    return 'ontouchstart' in window;
}

function onTouchStart(e)
{
    console.log("touches");
    var touches = e.touches;
    // Print out (x,y) co-ords of touch: touches[0].clientX contains
    // the x position.
    console.log(touches[0].clientX, touches[0].clientY);
}