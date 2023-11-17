class Color {
    constructor(id, hex, rgba){
        this.id = id;
        this.hex = hex;

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

export var prismacolors = [
    Color("10% Cool Grey", "E6E8E8"), 
    Color("10% French Grey", "E9E7DD"),
    Color("10% Warm Grey", "EAE8EA"),
    Color("20% Cool Grey", "D9DDE2"), 
    Color("20% French Grey", "D4D3C9"),
    Color("20% Warm Grey", "D5D3D5"),
    Color("30% Cool Grey", "C7CED5"), 
    Color("30% French Grey", "C1BFB8"),
    Color("30% Warm Grey", "C2BBBB"),
    Color("50% Cool Grey", "A7B0B8"), 
    Color("50% French Grey", "ABA4A1"),
    Color("50% Warm Grey", "A299A1"),
    Color("70% Cool Grey", "7C8C8E"), 
    Color("70% French Grey", "7B6D62"),
    Color("70% Warm Grey", "6D6262"),
    Color("90% Cool Grey", "2D4A5A"), 
    Color("90% French Grey", "292726"),
    Color("90% Warm Grey", "554A4A"),
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
    Color("Moss Green", "#6E6D13"), 
    Color("Mulberry", "#A9007B"), 
    Color("Muted Turquoise", "#51B7C3"), 
    Color("Nector", "#E2947B"),
    Color("Neon Orange", "#FF7716"), 
    Color("Neon Pink", "#FF34C0"), 
    Color("Neon Yellow", "#FFFF3B"), 
    Color("Non-Photo Blue", "#00BBD4"), 
    Color("Olive Green", "#3E5939"), 
    Color("Orange", "#FF6E12"), 
    Color("Pale Sage", "#DDEAC6"), 
    Color("Pale Vermilion", "#FA6610"), 
    Color("Parma Violet", "#8E69BA"),
    Color("Parrot Green", "#00B092"), 
    Color("Peach", "#F1A78D"),
    Color("Peach Beige", "#F8E4D6"), 
    Color("Peacock Blue", "#00739A"), 
    Color("Peacock Green", "#004729"), 
    Color("Permanent Red", "#F60000"), 
    Color("Periwinkle", "#50549B"), 
    Color("Pink", "#F3889E"), 
    Color("Pink Rose", "#ECB7C1"), 
    Color("Pomegranate", "#870038"),
    Color("Poppy Red", "#FF4908"), 
    Color("Powder Blue", "C3D8EE"), 
    Color("Process Red", "#D74893"), 
    Color("Pumpkin Orange", "#DE6619"), 
    Color("Putty Beige", "#DECDC7"), 
    Color("Raspberry", "#A31719"), 
    Color("Rosy Beige", "#D1BDC1"), 
    Color("Prussian Green", "#113B15"), 
    Color("Salmon Pink", "#F9AF9C"), 
    Color("Sand", "#FAE0B7"), 
    Color("Sandbar Brown", "#866210"), 
    Color("Sap Green Light", "#78A87C"), 
    Color("Scarlet Lake", "#D22909"), 
    Color("Seashell Pink", "#F4D1C4"),
    Color("Sepia", "#352D14"),
    Color("Sienna Brown", "#9F430A"), 
    Color("Silver", "#A3A1A3"), 
    Color("Sky Blue Light", "#B1E1F0"), 
    Color("Slate Grey", "#347E8F"), 
    Color("Spanish Orange", "#FFC12A"), 
    Color("Spring Green", "#85CF66"), 
    Color("Sunburst Yellow", "#FFD62F"), 
    Color("Terra Cotta", "#A14107"), 
    Color("True Blue", "#007EB4"), 
    Color("True Green", "#0BBF7E"), 
    Color("Tuscan", "#6F2436"), 
    Color("Ultramarine", "#19189E"), 
    Color("Violet", "#44308F"), 
    Color("Violet Blue", "#000092"), 
    Color("White", "#FFFFFF"), 
    Color("Yellow Chartreuse", "#FFF991"), 
    Color("Yellow Ochre", "#DAAD41"), 
    Color("Yellowed Orange", "#FFA723")
]
