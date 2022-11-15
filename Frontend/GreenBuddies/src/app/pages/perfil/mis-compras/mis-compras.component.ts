import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.component.html',
  styleUrls: ['./mis-compras.component.css']
})
export class MisComprasComponent implements OnInit {

public miscompras: {

    fechaMiCompra: string;
    tituloMiCompra: string;
    cantidadMiCompra: string;
    totalMiCompra: string;
    estadoMiCompra: string;
    accionesMiCompra: string;

  } [] = [

  {
    fechaMiCompra: '10/09/2022',
    tituloMiCompra: "Cepillo de dientes Meraki",
    cantidadMiCompra: '2' ,
    totalMiCompra: "440,00 ARS",
    estadoMiCompra: 'completado',
    accionesMiCompra: "Repetir compra",
  },
  {
    fechaMiCompra: '',
    tituloMiCompra: "Hilo dental Orlando",
    cantidadMiCompra: '1',
    estadoMiCompra: 'cancelado',
    totalMiCompra: '470,00 ARS',
    accionesMiCompra: "Repetir compra",
  },
  {
    fechaMiCompra: '',
    tituloMiCompra: "Afeitadora Ecologica Biodegradable",
    cantidadMiCompra: '1',
    estadoMiCompra: "en espera",
    totalMiCompra: "100,00 ARS",
    accionesMiCompra: "Repetir compra",
    
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
