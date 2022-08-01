import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { truncateString } from 'src/app/utils/truncateString';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {
  @Input() dataEntrante: Product =
    {
      id: NaN,
      nombre: null,
      categoria: null,
      descripcion: null,
      descuento: false,
      detalles: [],
      imagenes: [
        {
          src: "http://via.placeholder.com/640x360",
          alt: "Placeholder"
        }
      ],
      precio_con_descuento: null,
      precio_sin_descuento: null,
      recomendacion: null,
      stock: null,
    };

    public truncatedName = truncateString(this.dataEntrante.nombre, 35);

  constructor() { }

  ngOnInit(): void {
    this.truncatedName = truncateString(this.dataEntrante.nombre, 35);
  }
}
