import { Component, OnInit } from '@angular/core';
import { IImage } from 'src/app/models/image.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {
  public sliderTopImgs: IImage[] = [
    {
      id: 1654,
      src: "../../../assets/img/background_1.jpg",
      alt: "Productos 100% sustentables. Envíos a todo el país"
    },
    {
      id: 1655,
      src: "../../../assets/img/background_2.jpg",
      alt: "Registrate y accede a descuentos imperdibles"
    },
    {
      id: 1656,
      src: "../../../assets/img/background_2.jpg",
      alt: "Envío gratis en compras desde $2000"
    },
  ]

  public sliderMdImgs: IImage[] = [
    {
      id: 1657,
      src: "../../../assets/img/background_esponja.jpg",
      alt: "Producto nuevo: Esponja Konjac"
    },
    {
      id: 1658,
      src: "../../../assets/img/background_hilo.jpg",
      alt: "Hilo dental 100% vegano, sabor menta.  Packaging sustentable"
    },
    {
      id: 1659,
      src: "../../../assets/img/background_cepillo.jpg",
      alt: "Cepillo de bambú sustentable marca Meraki. 97% biodegradable y 3% reciclable"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
