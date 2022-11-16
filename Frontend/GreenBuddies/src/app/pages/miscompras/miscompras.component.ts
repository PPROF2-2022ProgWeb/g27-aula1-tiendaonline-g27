import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miscompras',
  templateUrl: './miscompras.component.html',
  styleUrls: ['./miscompras.component.css']
})
export class MiscomprasComponent implements OnInit {

  public miscompras: {

    fechaMiCompra: string;
    tituloMiCompra: string;
    cantidadMiCompra: string;
    totalMiCompra: string;
    estadoMiCompra: string;
    accionesMiCompra: string;

  } [] = [

  {
    fechaMiCompra: '27-09-2022',
    tituloMiCompra: "Cepillo de dientes Meraki",
    cantidadMiCompra: '2' ,
    totalMiCompra: "440,00 ARS",
    estadoMiCompra: 'completado',
    accionesMiCompra: "Repetir compra",
  },
  {
    fechaMiCompra: '11-10-2022',
    tituloMiCompra: "Hilo dental Orlando",
    cantidadMiCompra: '1',
    estadoMiCompra: 'cancelado',
    totalMiCompra: '470,00 ARS',
    accionesMiCompra: "Repetir compra",
  },
  {
    fechaMiCompra: '03-11-2022',
    tituloMiCompra: "Afeitadora Ecológica Biodegradable",
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
