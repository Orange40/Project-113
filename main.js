function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 230, 150, 220, 200);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20);

    rect(90, 420, 460, 20);

    rect(550, 440, 20, -400);

    rect(80, 440, 20, -400);

    fill(250, 0, 0);
    stroke(250, 0 , 0);
    circle(80, 50, 80);

    circle(80, 430, 80);

    circle(550, 50, 80);

    circle(550, 430, 80);

}