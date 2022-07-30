import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
 public var_productos = [
    { 
        "categoria" : "Personal care",
        "nombre" : "Facial sponge | Konjac",
        "precio_sin_descuento" : 749,
        "descuento" : false,
        "precio_con_descuento" : null,
        "descripcion" : null,
        "detalles" : ["Lavender: for all skin types", "Anti-inflammatory and relaxing", "Balances your PH", "Natural exfoliation", "Leaves your skin radiant and rejuvenated"],
        "recomendacion" : "It is recommended to change the sponge every 2 or 3 months depending on its use and care.",
        "stock" : 20,
        "imagenes" :  '../../../assets/img/esponja_konjac1.png'
    },
    { 
        "categoria" : "Personal care",
        "nombre" : "Brush holder | Meraki",
        "precio_sin_descuento" : 450,
        "descuento" : false,
        "precio_con_descuento" : null,
        "descripcion" : null,
        "detalles" : ["100% Moso Bamboo", "Biodegradable", "Ideal for traveling", "Upper and lower hole to drain water", "Biodegradable Packaging"],
        "recomendacion" : null,
        "stock" : 20,
        "imagenes" : '../../../assets/img/estuche_meraki.jpg'
    },
    { 
        "categoria" : "Personal care",
        "nombre" : "Dental floss | Orlando",
        "precio_sin_descuento" : 550,
        "descuento" : true,
        "precio_con_descuento" : 470,
        "descripcion" : null,
        "detalles" : ["100% vegan", "Biodegradable", "Activated carbon", "Mint flavor", "30 meters", "Biodegradable Packaging"],
        "recomendacion" : null,
        "stock" : 20,
        "imagenes" : '../../../assets/img/hilodental_Orlando.png'
    },
    {
        "categoria" : "Personal care",
        "nombre" : "Cloth Feminine Wipes | BeeGreen",
        "precio_sin_descuento" : 455,
        "descuento" : false,
        "precio_con_descuento" : null,
        "descripcion" : "Cloth feminine wipes allow comprehensive care throughout your cycle: they guarantee correct breathing in the area without exposing it to harmful chemicals. They are reusable and compostable, so with a single investment you save a lot of monthly expenses on disposable products, without generating rubbish.",
        "detalles" : ["100% cotton", "95% biodegradable and compostable", "5% recyclable (threads)", "With wings for a better fit", "20 cm long", "Minimum durability of 2 years"],
        "recomendacion" : null,
        "stock" : 20,
        "imagenes" :  '../../../assets/img/toallitas_tela.png'
    },
    {
        "categoria" : "Personal care",
        "nombre" : "Tooth brush | Meraki",
        "precio_sin_descuento" : 310,
        "descuento" : true,
        "precio_con_descuento" : 220,
        "descripcion" : "Made with bamboo. Both the handle of the brushes and their boxes are biodegradable and return to form part of the soil naturally. The only non-biodegradable component is the bristles, 3% of the total product, to guarantee the same useful life and functionality as a conventional brush. The recommended brush replacement time is 2-3 months.",
        "detalles" : [],
        "recomendacion" : null,
        "stock" : 20,
        "imagenes" : '../../../assets/img/cepillo_meraki.jpg'
    },
    {
        "categoria" : "Personal care",
        "nombre" : "Biodegradable ecological razor | Eco Sustentable",
        "precio_sin_descuento" : 120,
        "descuento" : true,
        "precio_con_descuento" : 100,
        "descripcion" : null,
        "detalles" : ["Biodegradable razor", "Material: ecological wheat straw", "Decomposes after 90 days", "Does not include lubricating strip"],
        "recomendacion" : null,
        "stock" : 20,
        "imagenes" : '../../../assets/img/afeitadora_trigo.png'
    },
    {
        "categoria" : "Home",
        "nombre" : "Biodegradable dinnerware set 6 pieces | Oregon",
        "precio_sin_descuento" : 2000,
        "descuento" : true,
        "precio_con_descuento" : 1299,
        "descripcion" : "5.7-inch biodegradable, ecological and unbreakable wheat straw dinnerware set ideal for children's meals. It contains 6 pieces in assorted colors, it is very light, resistant, durable and microwave-safe.",
        "detalles" : [],
        "recomendacion" : null,
        "stock" : 20,
        "imagenes" :  '../../../assets/img/juego_vajilla.png'

    },
    {
        "categoria" : "Home",
        "nombre" : "Pack of reusable straws | Oregon",
        "precio_sin_descuento" : 1800,
        "descuento" : false,
        "precio_con_descuento" : null,
        "descripcion" : "Modern and elegant design with case to take anywhere, show off this beauty! Our reusable straws are the natural choice for everyone, they are BPA free. Made of stainless steel, no metal taste, dishwasher safe, reusable and respectful with the environment. How to use: Remove from the case and insert into your favorite drink, after use wash with plenty of soap and water, let dry completely in a cool and ventilated environment.",
        "detalles" : [],
        "recomendacion" : null,
        "stock" : 20,
        "imagenes" : '../../../assets/img/sorbetereutilizable_oregon.jpg'
    },
    {
        "categoria" : "Home",
        "nombre" : "Reusable Food Wrappers - X 4 | BeeGreen",
        "precio_sin_descuento" : 2000,
        "descuento" : true,
        "precio_con_descuento" : 1299,
        "descripcion" : "Blending 100% cotton fabric, with beeswax, organic jojoba oil, and tree resin, creates a washable, REUSABLE fabric and an alternative to plastic. Wash in cold water with mild soap. Avoid heat sources, such as hot water, sun, and microwave. Air dry, and store in a cool place. Beeswax and jojoba oil have antibacterial qualities that help keep your food fresh and allow you to use the wrap over and over again.",
        "detalles" : [],
        "recomendacion" : null,
        "stock" : 20,
        "imagenes" : '../../../assets/img/envoltorio_beegreen.png'
    },
    {
        "categoria" : "Pets",
        "nombre" : "Biodegradable waste bags | Eco-Clean",
        "precio_sin_descuento" : 3000,
        "descuento" : false,
        "precio_con_descuento" : null,
        "descripcion" : "Unscented Eco Bags for Dogs includes 24 rolls/360 bags with 1 dispenser that fits all eco dog waste bags. Our poop bags are highly durable and won't leak, rip, or tear. Made to withstand the more difficult tasks, they are soft to the touch and do not stick together, which makes them easy to open.",
        "detalles" : [],
        "recomendacion" : null,
        "stock" : 20,
        "imagenes" : '../../../assets/img/bolsa_mascota.png'
    },
    {
        "categoria" : "Pets",
        "nombre" : "Pet feeder | Eco-Pet",
        "precio_sin_descuento" : 450,
        "descuento" : true,
        "precio_con_descuento" : 380,
        "descripcion" : "Biodegradable feeder for dogs and cats. Ideal for serving your pet's food or drink. It is made with bamboo fibers and corn starch. With a non-slip base to offer maximum fixation. No plastics, all 100% natural. Available in 2 formats.",
        "detalles" : [],
        "recomendacion" : null,
        "stock" : 20,
        "imagenes" : '../../../assets/img/plato_mascota.png'
    },
    {
        "categoria" : "Pets",
        "nombre" : "Solid shampoo | Zorro D'Avi",
        "precio_sin_descuento" : 390,
        "descuento" : true,
        "precio_con_descuento" : 300,
        "descripcion" : "Do you want to include the furry ones in the family in your zero waste routines? Start here with this solid shampoo for dogs specially formulated to pamper the hair and skin of your pets. This vegan tablet, made with natural ingredients free of toxic and not tested on animals, it will be your faithful ally to untangle difficult knots and prevent itching and flaking, thanks to the moisturizing and soothing effects of olive oil and lavender.",
        "detalles" : [],
        "recomendacion" : null,
        "stock" : 20,
        "imagenes" : '../../../assets/img/champu-solido-para-perros-.jpg'
    },
    {
        "categoria" : "Pets",
        "nombre" : "Medium dog kennel | Eco-cucha",
        "precio_sin_descuento" : 4999,
        "descuento" : false,
        "precio_con_descuento" : null,
        "descripcion" : "Dog kennel model 2 waters produced with recycled polyaluminum from Tetra Brik packaging. Manufacturing process at high temperatures, making the product free of fungi and bacteria. Product 100% washable and easy to maintain. Its assembly is simple and fast. 100% washable and easy to maintain product. Its assembly is simple and fast.",
        "detalles" : [],
        "recomendacion" : null,
        "stock" : 20,
        "imagenes" : '../../../assets/img/cucha_perros.jpg'
    }
]

  constructor() { }

  ngOnInit(): void {    
  
}
}


