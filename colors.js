class Color {
    constructor(id, hex){
        this.id = id;
        this.color = hex; 
    
    }
    convertToRGB(){
        this.color = this.color.replace("#","");
        var bigint = parseInt(this.color, 16);
        var r = (bigint >> 16)& 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;
        this.color = [r, g, b, 255];

    }
}
var prismacolors = [
    new Color("Apple Green", "#4DAD44")
];
prismacolors[0].convertToRGB();