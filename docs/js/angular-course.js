$.material.init();

$('#sidebar').affix({
    offset: {
        top: $('#sidebar').offset().top
    }
});

var pattern = Trianglify({
    width: window.innerWidth,
    height: 200,
    variance: "1",
    seed: 'PuRd',
    x_colors: 'PuRd'
});

var trianglifyCanvas = document.getElementById('trianglifyCanvas');

pattern.canvas(trianglifyCanvas);

var trianglifyContext = trianglifyCanvas.getContext("2d");
trianglifyContext.font = "100px Arial";
trianglifyContext.fillStyle = "#F7FDFA";
trianglifyContext.textAlign = "center";
trianglifyContext.fillText("Angular JS Course", trianglifyCanvas.width/2, trianglifyCanvas.height/2);
trianglifyContext.strokeText("Angular JS Course", trianglifyCanvas.width/2, trianglifyCanvas.height/2);
