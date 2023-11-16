class Color {
    constructor(id, hex, rgba){
        this.id = id;
        this.hex = hex;

        //hex value to rgba value
        convertToRGB(){
            var newhex = ; 
            this.newhex = this.hex.replace("#","");
            var bigint = parseInt(this.newhex, 16);
            var r = (bigint >> 16)& 255;
            var g = (bigint >> 8) & 255;
            var b = bigint & 255;
            this.rgba = [r, g, b, 255];
    }
    }
}
var prismacolors = [
    Color("Apple Green", "#4DAD44"),
    Color("Aquamarine", "#008C9E"), 
    Color("Artichoke", "#7F7315"), 
    Color("Beige", "#FADDB2"), 
    Color("Beige Sienna", "#DDA492"), 
    Color("Black", "#0000000"), 
    Color("Black Cherry", "520040"),
    Color("Black Grape", "#320341"), 
    Color("Black Raspberry","#3B0A12"), 
    Color("Blue Lake", "#568BD2"), 
    Color("Blue Slate", "94B2D6"),
    Color("Blue Violet Lake", "#4575BF"), 
    Color("Blush Pink", "#FFBCB8"),
    Color("Bronze", "#A17315"), 
    Color("Burnt Ochre", "#9F5215"), 
    Color("Cadmium Orange Hue", "#E9773D"),
    Color("Canary Yellow", "#FFFF6A"), 
    Color("Caribbean Sea", "#8BBBE0"), 
    Color("Carmine Red", "#DB3129"), 
    Color("Celadon Green", "#ACBD9D"),
    Color("Cerulean Blue", "#005895"),
    Color("Chartreuse", "#C7D35C"), 
    Color("Chestnut", "#672F17"), 
    Color("China Blue", "#315AC7"), 
    Color("Chocolate", "#481B0F"), 
    Color("Clay Rose", "#C2A9AE"), 
    Color("Cloud Blue", "#C7DDEA"), 
    Color("Cobalt Blue Hue", "#32358B"), 
    Color("Cobalt Turquoise", "#006769"), 
    Color("Copenhagen Blue", "#005B8E"), 
    Color("Cream", "#FFF4C8"), 
    Color("Crimson Lake", "#880503"), 
    Color("Crimson Red", "#B42830"), 
    Color("Dahlia Purple", "#8D007B"), 
    Color("Dark Brown", "#431F16"), 
    Color("Dark Green", "#00512D"), 
    Color("Dark Purple", "#652B84"), 
    Color("Dark Umber", "#422B20"), 
    Color("Deco Peach", "#FEE3E4"), 
    Color("Deco Pink", "#FFD5E3"), 
    Color("Deco Yellow", "#FFF1AB"), 
    Color("Denim Blue", "#004993"), 
    Color("Dioxazine Purple Hue", "#2B1A68"), 
    Color("Eggshell", "#FFEAC6"), 
    Color("Electric Blue", "#008ACF"), 
    Color("Espresso", "#533D2E"), 
    Color("Ginger Root", "#E7CEB1"), 
    Color("Goldenrod", "#E8A42C"), 
    Color("Grass Green", "#158245"), 
    Color("Green Ochre", "#A08C1C"), 
    Color("Grey Green Light", "#CAD9CB"), 
    Color("Greyed Lavender", "#CFBDDC"), 
    Color("Henna", "#994924"), 
    Color("Hot Pink", "#FF8BBF"), 
    Color("Imperial Violet", "#230B65"), 
    Color("Inanthrone Blue", "#000059"),
    Color("Indigo Blue", "#002F50"), 
    Color("Jade Green", "#74BD9F"),
    Color("Jasmine", "#FFDD93"), 
    Color("Kelly Green", "#2F6943"), 
    Color("Kelp Green", "#738C1C"), 
    Color("Lavender", "#C39BC8"), 
    Color("Lemon Yellow", "#FEF769"), 
    Color("Light Aqua", "#68CDC4"), 
    Color("Light Cerulean Blue", "#94C7EB"), 
    Color("Light Green", "#B2DDA9"), 
    Color("Light Peach", "#FED9C8"), 
    Color("Light Umber", "#7F633F"),
    Color("Lilac", "#7A66A8"), 
    Color("Limepeel", "#C6CD55"), 
    Color("Magenta", "#A12049"), 
    Color("Mahogany Red", "#8C0821"), 
    Color("Marine Green", "#676210"), 
    Color("Mediterranean Blue", "#007E9E"), 
    Color("Metallic Gold", "#AC8B3C"), 
    Color("Mineral Orange", "#E68C3F"),



]
console.log(prismacolors[0].convertToRGB());

for (var m = 0; m < )
for(var i = 0; i < pixels.length; i++){
    var dist; 
    var prismaX = pixels[i][0];
    var prismaY = pixels[i][1];
    var prismaZ = pixels[i][2];
    var p
    dist = Math.sqrt(Math.pow(prismaX -  ) + Math.pow(prismaY - ) + Math.pow(prismaZ - ))

}
