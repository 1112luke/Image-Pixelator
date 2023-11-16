var blocksize = 10;

var img;

function preload() {
    
    img = loadImage('assets/lynley.jpg');
}

function setup() {
    createCanvas(1000,1000);
    //load image
    img.loadPixels();
    var WIDTH = img.width;
    var HEIGHT = img.height;
    //pixel formatting
    var pixels = createGoodArray(img.pixels,WIDTH,HEIGHT);
    //create pixelated image array
    var newpixelarr = createPixelArray(pixels,WIDTH,HEIGHT);
    //make image from pixelated array
    var newimg = makeImage(newpixelarr,WIDTH,HEIGHT);
    //display image 
    newimg.loadPixels();

    image(newimg, 350, 350);
    image(img, 100,100);
  }
  
  function draw() {
  }


  function createGoodArray(pixels,WIDTH,HEIGHT){
    var understandable = [];
    //create new understandeable array
    for(var i = 0; i < pixels.length/4; i++){
        var newarr = []
        for(var j = 0; j < 4; j++){
            newarr.push(pixels[(i*4)+j])
        }
        understandable.push(newarr);
        newarr = []
    }
    
    //force understandeable into rows
    var out = []
    for(var i = 0; i < HEIGHT; i++){
        var row = [];
        for(var j = 0; j < WIDTH; j++){
            row.push(understandable[i*WIDTH+j])
        }
        out.push(row);
    }
    return out;
  }

  function createPixelArray(pixels,WIDTH,HEIGHT){
    out = [];
    var r;
    var g;
    var b;
    //make width and height for pixelated image
    var width = WIDTH / blocksize;
    var height = HEIGHT / blocksize
    for(var i = 0; i < width; i++){
        for(var j = 0; j < height; j++){
            //for every new pixel

            var block = [];
            r = 0;
            g = 0;
            b = 0;

            for(var k = i*blocksize; k < i*blocksize + blocksize; k++){
                for(var l = (j*blocksize); l < (j*blocksize)+blocksize; l++){
                    r += pixels[k][l][0];
                    g += pixels[k][l][1];
                    b += pixels[k][l][2];
                }
            }

            block[0] = r/(blocksize*blocksize);
            block[1] = g/(blocksize*blocksize);
            block[2] = b/(blocksize*blocksize);
            block[3] = 255;

            out.push(block);
            block = [];
        }
    }
    return out;
  }

  function makeImage(pix,WIDTH,HEIGHT){
    console.log(pix);
    let out = createImage(WIDTH/blocksize, HEIGHT/blocksize);
    out.loadPixels();
    let numPixels = out.width * out.height;
    for (let i = 0; i < numPixels; i++) {
    // Red.
    out.pixels[4*i] = pix[i][0];
    // Green.
    out.pixels[4*i+1] = pix[i][1];
    // Blue.
     out.pixels[4*i + 2] = pix[i][2];
     // Alpha.
    out.pixels[4*i + 3] = 255;
    }
    out.updatePixels();
    return out;
  }