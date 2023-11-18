class Color {
    constructor(id, hex, rgba){
        this.id = id;
        this.hex = hex;
        this.rgba;
    }
        //hex value to rgba value
        convertToRGB(){
            var newhex;
            this.newhex = this.hex.replace("#","");
            var bigint = parseInt(this.newhex, 16);
            var r = (bigint >> 16)& 255;
            var g = (bigint >> 8) & 255;
            var b = bigint & 255;
            this.rgba = [r, g, b, 255];
        }  
}


var prismacolors = [
    new Color("10% Cool Grey", "#E6E8E8"), 
    new Color("10% French Grey", "#E9E7DD"),
    new Color("10% Warm Grey", "#EAE8EA"),
    new Color("20% Cool Grey", "#D9DDE2"), 
    new Color("20% French Grey", "#D4D3C9"),
    new Color("20% Warm Grey", "#D5D3D5"),
    new Color("30% Cool Grey", "#C7CED5"), 
    new Color("30% French Grey", "#C1BFB8"),
    new Color("30% Warm Grey", "#C2BBBB"),
    new Color("50% Cool Grey", "#A7B0B8"), 
    new Color("50% French Grey", "#ABA4A1"),
    new Color("50% Warm Grey", "#A299A1"),
    new Color("70% Cool Grey", "#7C8C8E"), 
    new Color("70% French Grey", "#7B6D62"),
    new Color("70% Warm Grey", "#6D6262"),
    new Color("90% Cool Grey", "#2D4A5A"), 
    new Color("90% French Grey", "#292726"),
    new Color("90% Warm Grey", "#554A4A"),
    new Color("Apple Green", "#4DAD44"),
    new Color("Aquamarine", "#008C9E"), 
    new Color("Artichoke", "#7F7315"), 
    new Color("Beige", "#FADDB2"), 
    new Color("Beige Sienna", "#DDA492"), 
    new Color("Black", "#0000000"), 
    new Color("Black Cherry", "520040"),
    new Color("Black Grape", "#320341"), 
    new Color("Black Raspberry","#3B0A12"), 
    new Color("Blue Lake", "#568BD2"), 
    new Color("Blue Slate", "94B2D6"),
    new Color("Blue Violet Lake", "#4575BF"), 
    new Color("Blush Pink", "#FFBCB8"),
    new Color("Bronze", "#A17315"), 
    new Color("Burnt Ochre", "#9F5215"), 
    new Color("Cadmium Orange Hue", "#E9773D"),
    new Color("Canary Yellow", "#FFFF6A"), 
    new Color("Caribbean Sea", "#8BBBE0"), 
    new Color("Carmine Red", "#DB3129"), 
    new Color("Celadon Green", "#ACBD9D"),
    new Color("Cerulean Blue", "#005895"),
    new Color("Chartreuse", "#C7D35C"), 
    new Color("Chestnut", "#672F17"), 
    new Color("China Blue", "#315AC7"), 
    new Color("Chocolate", "#481B0F"), 
    new Color("Clay Rose", "#C2A9AE"), 
    new Color("Cloud Blue", "#C7DDEA"), 
    new Color("Cobalt Blue Hue", "#32358B"), 
    new Color("Cobalt Turquoise", "#006769"), 
    new Color("Copenhagen Blue", "#005B8E"), 
    new Color("Cream", "#FFF4C8"), 
    new Color("Crimson Lake", "#880503"), 
    new Color("Crimson Red", "#B42830"), 
    new Color("Dahlia Purple", "#8D007B"), 
    new Color("Dark Brown", "#431F16"), 
    new Color("Dark Green", "#00512D"), 
    new Color("Dark Purple", "#652B84"), 
    new Color("Dark Umber", "#422B20"), 
    new Color("Deco Peach", "#FEE3E4"), 
    new Color("Deco Pink", "#FFD5E3"), 
    new Color("Deco Yellow", "#FFF1AB"), 
    new Color("Denim Blue", "#004993"), 
    new Color("Dioxazine Purple Hue", "#2B1A68"), 
    new Color("Eggshell", "#FFEAC6"), 
    new Color("Electric Blue", "#008ACF"), 
    new Color("Espresso", "#533D2E"), 
    new Color("Ginger Root", "#E7CEB1"), 
    new Color("Goldenrod", "#E8A42C"), 
    new Color("Grass Green", "#158245"), 
    new Color("Green Ochre", "#A08C1C"), 
    new Color("Grey Green Light", "#CAD9CB"), 
    new Color("Greyed Lavender", "#CFBDDC"), 
    new Color("Henna", "#994924"), 
    new Color("Hot Pink", "#FF8BBF"), 
    new Color("Imperial Violet", "#230B65"), 
    new Color("Inanthrone Blue", "#000059"),
    new Color("Indigo Blue", "#002F50"), 
    new Color("Jade Green", "#74BD9F"),
    new Color("Jasmine", "#FFDD93"), 
    new Color("Kelly Green", "#2F6943"), 
    new Color("Kelp Green", "#738C1C"), 
    new Color("Lavender", "#C39BC8"), 
    new Color("Lemon Yellow", "#FEF769"), 
    new Color("Light Aqua", "#68CDC4"), 
    new Color("Light Cerulean Blue", "#94C7EB"), 
    new Color("Light Green", "#B2DDA9"), 
    new Color("Light Peach", "#FED9C8"), 
    new Color("Light Umber", "#7F633F"),
    new Color("Lilac", "#7A66A8"), 
    new Color("Limepeel", "#C6CD55"), 
    new Color("Magenta", "#A12049"), 
    new Color("Mahogany Red", "#8C0821"), 
    new Color("Marine Green", "#676210"), 
    new Color("Mediterranean Blue", "#007E9E"), 
    new Color("Metallic Gold", "#AC8B3C"), 
    new Color("Mineral Orange", "#E68C3F"),
    new Color("Moss Green", "#6E6D13"), 
    new Color("Mulberry", "#A9007B"), 
    new Color("Muted Turquoise", "#51B7C3"), 
    new Color("Nector", "#E2947B"),
    new Color("Neon Orange", "#FF7716"), 
    new Color("Neon Pink", "#FF34C0"), 
    new Color("Neon Yellow", "#FFFF3B"), 
    new Color("Non-Photo Blue", "#00BBD4"), 
    new Color("Olive Green", "#3E5939"), 
    new Color("Orange", "#FF6E12"), 
    new Color("Pale Sage", "#DDEAC6"), 
    new Color("Pale Vermilion", "#FA6610"), 
    new Color("Parma Violet", "#8E69BA"),
    new Color("Parrot Green", "#00B092"), 
    new Color("Peach", "#F1A78D"),
    new Color("Peach Beige", "#F8E4D6"), 
    new Color("Peacock Blue", "#00739A"), 
    new Color("Peacock Green", "#004729"), 
    new Color("Permanent Red", "#F60000"), 
    new Color("Periwinkle", "#50549B"), 
    new Color("Pink", "#F3889E"), 
    new Color("Pink Rose", "#ECB7C1"), 
    new Color("Pomegranate", "#870038"),
    new Color("Poppy Red", "#FF4908"), 
    new Color("Powder Blue", "C3D8EE"), 
    new Color("Process Red", "#D74893"), 
    new Color("Pumpkin Orange", "#DE6619"), 
    new Color("Putty Beige", "#DECDC7"), 
    new Color("Raspberry", "#A31719"), 
    new Color("Rosy Beige", "#D1BDC1"), 
    new Color("Prussian Green", "#113B15"), 
    new Color("Salmon Pink", "#F9AF9C"), 
    new Color("Sand", "#FAE0B7"), 
    new Color("Sandbar Brown", "#866210"), 
    new Color("Sap Green Light", "#78A87C"), 
    new Color("Scarlet Lake", "#D22909"), 
    new Color("Seashell Pink", "#F4D1C4"),
    new Color("Sepia", "#352D14"),
    new Color("Sienna Brown", "#9F430A"), 
    new Color("Silver", "#A3A1A3"), 
    new Color("Sky Blue Light", "#B1E1F0"), 
    new Color("Slate Grey", "#347E8F"), 
    new Color("Spanish Orange", "#FFC12A"), 
    new Color("Spring Green", "#85CF66"), 
    new Color("Sunburst Yellow", "#FFD62F"), 
    new Color("Terra Cotta", "#A14107"), 
    new Color("True Blue", "#007EB4"), 
    new Color("True Green", "#0BBF7E"), 
    new Color("Tuscan", "#6F2436"), 
    new Color("Ultramarine", "#19189E"), 
    new Color("Violet", "#44308F"), 
    new Color("Violet Blue", "#000092"), 
    new Color("White", "#FFFFFF"), 
    new Color("Yellow Chartreuse", "#FFF991"), 
    new Color("Yellow Ochre", "#DAAD41"), 
    new Color("Yellowed Orange", "#FFA723")
];

for(var i = 0; i < prismacolors.length; i++){
    prismacolors[i].convertToRGB();
}

//create html canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

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
    //redefine width and height after change
    var WIDTH = pixels[0].length;
    var HEIGHT = pixels.length;
    //create pixelated image array
    var newpixelarr = createPixelArray(pixels,WIDTH,HEIGHT);
    //findclosestcolors
    var newpixelarr = findCloseColors(newpixelarr, prismacolors);
    //make image from pixelated array
    var newimg = makeImage(newpixelarr,WIDTH,HEIGHT);
    //render as blocks
    renderAsBlocks(WIDTH, HEIGHT, newpixelarr);
    //display image 
    //newimg.loadPixels();
    //newimg.resize(350,0);
    //image(newimg, 350, 350);
    //image(img, 100,100);
}


class Color {
    constructor(id, hex, rgba){
        this.id = id;
        this.hex = hex;
        this.selected = true; 

        //hex value to rgba value
        convertToRGB()
            var newhex 
            this.newhex = this.hex.replace("#","");
            var bigint = parseInt(this.newhex, 16);
            var r = (bigint >> 16)& 255;
            var g = (bigint >> 8) & 255;
            var b = bigint & 255;
            this.rgba = [r, g, b, 255];
    }
}


//handle slider

var slider = document.getElementById("slider");
slider.oninput = function(){
    blocksize = this.value;
    setup();
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

    //slice image to be divisible by blocks
    //slice rows
    var rowstoslice = out.length % blocksize;
    for(var i = 0; i < rowstoslice; i++){
       out.pop();
    }
    //remove colomns
    var colstoslice = out[0].length % blocksize;
    for(var i = 0; i < out.length; i++){
        for(var j = 0; j < colstoslice; j++){
            out[i].pop();
        }
    }

    return out;
  }

  function createPixelArray(pixels,WIDTH,HEIGHT){
    var out = [];
    var r = 0;
    var g = 0;
    var b = 0;
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

  
  function findCloseColors(pixels, prismacolors){
    console.log(prismacolors);
    for(var i = 0; i < pixels.length; i++){
        var min = 195075;
        var closestColor = ""; 
        for (var j = 0; j < prismacolors.length; j++){
            var dist = Math.pow((prismacolors[j].rgba[0]-pixels[i][0]),2) + Math.pow((prismacolors[j].rgba[1]-pixels[i][1]),2) 
            + Math.pow((prismacolors[j].rgba[2]-pixels[i][2]),2);
            if (dist < min){
                min = dist;
                closestColor = prismacolors[j];
            } 
        }
        pixels[i][0] = closestColor.rgba[0];
        pixels[i][1] = closestColor.rgba[1];
        pixels[i][2] = closestColor.rgba[2];
        pixels[i][3] = 255;
    }
    return pixels;
  }

  function renderAsBlocks(oldwidth, oldheight, pixels){
    canvas.width = oldwidth;
    canvas.height = oldheight;
    var cols = canvas.width / blocksize;
    var rows = canvas.height / blocksize;
    ctx.fillStyle = "blue";
    var count = 0;

    for(var i = 0; i < rows; i++){
        for(var j = 0; j < cols; j++){
            //set color for current block
            ctx.fillStyle = `rgba(${pixels[count][0]},${pixels[count][1]},${pixels[count][2]},255)`;

            ctx.fillRect(j*blocksize,i*blocksize,blocksize,blocksize);

            count ++;
        }
    }
  }