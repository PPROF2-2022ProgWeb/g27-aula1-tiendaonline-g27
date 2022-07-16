import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  public var_productos:Array<any> = []
  constructor() { }

  ngOnInit(): void {    
    
this.var_productos =  [
  { 
      "categoria" : "Cuidado personal",
      "nombre" : "Esponja facial | Konjac",
      "precio" : 749,
      "descuento" : false,
      "preciodescuento" : null,
      "descripcion" : null,
      "detalles" : ["Lavanda: para todo tipo de piel", "Antiinflamatorio y relajante", "Balancea tu PH", "Exfoliación natural", "Deja tu piel radiante y rejuvenecida"],
      "recomendacion" : "Se recomienda cambiar la esponja cada 2 o 3 meses según su uso y cuidado.",
      "stock" : 20,
      "imagenes" :  'assets/productos/esponja_konjac1.png'
  },
  { 
      "categoria" : "Cuidado personal",
      "nombre" : "Porta Cepillo | Meraki",
      "precio" : 450,
      "descuento" : false,
      "preciodescuento" : null,
      "descripcion" : null,
      "detalles" : ["100% Bambú Moso", "Biodegradable", "Ideal para viajar", "Orificio superior e inferior para drenar agua", "Packaging Biodegradable"],
      "recomendacion" : null,
      "stock" : 20,
      "imagenes" :  'assets/productos/estuche_meraki.jpg'
  },
  { 
      "categoria" : "Cuidado personal",
      "nombre" : "Hilo dental | Orlando",
      "precio" : 550,
      "descuento" : true,
      "preciodescuento" : 470,
      "descripcion" : null,
      "detalles" : ["100% vegano", "Biodegradable", "Carbón activado", "Sabor menta", "30 metros", "Packaging Biodegradable"],
      "recomendacion" : null,
      "stock" : 20,
      "imagenes" : 'assets/productos/hilodental_Orlando.png'
  },
  {
      "categoria" : "Cuidado personal",
      "nombre" : "Toallitas Femeninas de Tela | BeeGreen",
      "precio" : 455,
      "descuento" : false,
      "preciodescuento" : null,
      "descripcion" : "Las toallitas femeninas de tela permiten un cuidado integral durante todo tu ciclo: garantizan una correcta respiración de la zona sin exponerla a químicos perjudiciales. Son reutilizables y compostables, por lo que con una única inversión ahorras cantidad de gastos mensuales en productos desechables, sin generar basura.",
      "detalles" : ["100% algodón", "95% biodegradable y compostable", "5% reciclable (hilos)", "Con alas para un mejor ajuste", "20 cm de largo", "Durabilidad mínima de 2 años"],
      "recomendacion" : null,
      "stock" : 20,
      "imagenes" : 'assets/productos/toallitas_tela.png'
  },
  {
      "categoria" : "Cuidado personal",
      "nombre" : "Cepillo de dientes | Meraki",
      "precio" : 310,
      "descuento" : true,
      "preciodescuento" : 220,
      "descripcion" : "Fabricado con bambú. Tanto el mango de los cepillos como sus cajas son biodegradables y vuelven a formar parte del suelo de manera natural. El único componente no biodegradable son las cerdas, 3% del total del producto, para garantizar la misma vida útil y funcionalidad que un cepillo convencional. El tiempo recomendado de reemplazo del cepillo es de 2-3 meses.",
      "detalles" : [],
      "recomendacion" : null,
      "stock" : 20,
      "imagenes" : 'assets/productos/cepillo_meraki.jpg'
  },
  {
      "categoria" : "Cuidado personal",
      "nombre" : "Afeitadora biodegradable | Eco Sustentable",
      "precio" : 120,
      "descuento" : true,
      "preciodescuento" : 100,
      "descripcion" : null,
      "detalles" : ["Máquina de afeitar biodegradable", "Material: ecológica de paja de trigo", "Se descompone despues de 90 dias", "No incluye banda lubricante"],
      "recomendacion" : null,
      "stock" : 20,
      "imagenes" : 'assets/productos/afeitadora_trigo.png'
  },
  {
      "categoria" : "Hogar",
      "nombre" : "Vajilla biodegradable | Oregon",
      "precio" : 2000,
      "descuento" : true,
      "preciodescuento" : 1299,
      "descripcion" : "Set de vajilla de paja de trigo biodegradable, ecológica e irrompible de 5,7 pulgadas ideal para la comida de los niños. Contiene 6 piezas de colores surtidos, es muy ligera, resistente, duradera y apta para microondas.",
      "detalles" : [],
      "recomendacion" : null,
      "stock" : 20,
      "imagenes" : 'assets/productos/juego_vajilla.png'
  },
  {
      "categoria" : "Hogar",
      "nombre" : "Pack de sorbetes reutilizables | Oregon",
      "precio" : 1800,
      "descuento" : false,
      "preciodescuento" : null,
      "descripcion" : "Diseño moderno y elegante con estuche para llevar a donde quieras, lucite con esta hermosura! Nuestros sorbetes reutilizables son la elección natural para todos, son libres de BPA. Hechas de acero inoxidable, no tienen sabor a metal, apto para lavavajillas, reutilizables y respetuosos con el medio ambiente. Modo de uso: Sacar del estuche e insertar en tu bebida favorita, luego de usar lavar con abundante agua y jabón, dejar secar en su totalidad en ambiente fresco y ventilado.",
      "detalles" : [],
      "recomendacion" : null,
      "stock" : 20,
      "imagenes" : 'assets/productos/sorbetereutilizable_Oregon.jpg'
  },
  {
      "categoria" : "Hogar",
      "nombre" : "Envoltorios Reutilizables | BeeGreen",
      "precio" : 2000,
      "descuento" : true,
      "preciodescuento" : 1299,
      "descripcion" : "Mezclando tela 100% algodón, con cera de abeja, aceite de jojoba orgánico y resina de árbol, se crea una tela lavable, REUTILIZABLE y una alternativa al plástico. Lavar en agua fría con un jabón suave. Evita las fuentes de calor, como agua caliente, sol y microondas. Secar al aire libre, y guardar en un lugar fresco. La cera de abeja y el aceite de jojoba tienen cualidades antibacterianas que ayudan a mantener sus alimentos frescos y te permiten usar la envoltura una y otra vez.",
      "detalles" : [],
      "recomendacion" : null,
      "stock" : 20,
      "imagenes" : 'assets/productos/envoltorio_beegreen.png'
  },
  {
      "categoria" : "Mascotas",
      "nombre" : "Bolsas de residuos biodegradables | Eco-Clean",
      "precio" : 3000,
      "descuento" : false,
      "preciodescuento" : null,
      "descripcion" : "Las bolsas ecológicas sin perfume para perros incluyen 24 rollos/360 bolsas con 1 dispensador que se adapta a todas las bolsas de basura ecológicas para perro. Nuestras bolsas para caca son muy duraderas y no se fugan, rompen o rompen. Hecho para soportar las tareas más difíciles, son suaves al tacto y no se pegan entre sí, lo que hace que sea fácil de abrir.",
      "detalles" : [],
      "recomendacion" : null,
      "stock" : 20,
      "imagenes" : 'assets/productos/bolsa_mascota.png'
  },
  {
      "categoria" : "Mascotas",
      "nombre" : "Comedero para mascotas | Eco-Pet",
      "precio" : 450,
      "descuento" : true,
      "preciodescuento" : 380,
      "descripcion" : "Comedero biodegradable para perros y gatos. Ideal para servir la comida o bebida de tu mascota. Está fabricado con fibras de bambú y almidón de maíz. Con base antideslizante para ofrecer la máxima fijación. Sin plásticos, todo 100% natural. Disponible en 2 formatos.",
      "detalles" : [],
      "recomendacion" : null,
      "stock" : 20,
      "imagenes" : 'assets/productos/plato_mascota.png'
  },
  {
      "categoria" : "Mascotas",
      "nombre" : "Shampoo sólido | Zorro D'Avi",
      "precio" : 390,
      "descuento" : true,
      "preciodescuento" : 300,
      "descripcion" : "¿Quieres incluir a los peludos de la familia en tus rutinas residuo cero? Empieza por aquí con este champú sólido para perros especialmente formulado para mimar el pelo y la piel de tus mascotas. Esta pastilla vegana, hecha con ingredientes naturales libres de tóxicos y no testada en animales, será tu fiel aliada para desenredar los nudos difíciles y evitar picores y descamaciones, gracias a los efectos hidratantes y calmantes del aceite de oliva y la lavanda.",
      "detalles" : [],
      "recomendacion" : null,
      "stock" : 20,
      "imagenes" : 'assets/productos/champu-solido-para-perros-.jpg'
  },

]

  
}
}


