import { Component, OnInit } from '@angular/core';
//import { PostService } from 'src/app/services/post.service';
//import { observable } from 'rxjs';
//import { PostI } from 'src/app/models/post.interface';
//import { tap, catchError, throwError } from 'rxjs';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  /*La llamada del servicio sustituirá el mock.*/

  public posts: {

    id: string;
    imagePost: string;
    titlePost: string;
    contentPost: string;
    buttonPost: string;
    labelPost: string;

  }[] = [

      {
        id: '1',
        imagePost: "../../../assets/img/IMG-bprincipal1.png",
        titlePost: '¿Qué es un producto sostenible?',
        contentPost: `"Un producto sostenible ha sido elaborado respetando el Medio Ambiente,
      protegiendo a las personas y comunidades que han participado en todo el proceso de elaboración
      sin provocar impacto en el medio ambiente...” Por Sostenebilidad.unlugarmejor.com`,
        buttonPost: "http://sostenibilidad.unlugarmejor.com/que-es-un-producto-sostenible",
        labelPost: "#sostenebilidad",
      },
      {
        id: '2',
        imagePost: "../../../assets/img/IMG-bsecundario2.png",
        titlePost: 'Cambiar el rumbo',
        contentPost: `“…Múltiples decisiones pueden tomarse para cambiar el rumbo hacia la sostenibilidad y
      respeto de nuestro medio ambiente, da el paso inicial hacia un
      mañana mejor…” Por Yurena Gonzalez.`,
        buttonPost: "https://www.ecoblognonoa.com",
        labelPost: "#medioambiente",
      },
      {
        id: '3',
        imagePost: "assets/img/blog2.jpeg",
        titlePost: 'Hábitos de sostenebilidad',
        contentPost: `Detrás de este blog está Irene Gijón Prieto, nos escribe sobre sostenibilidad desde varios 
      aspectos, información interesante, novedosa.`,
        buttonPost: "https://larecolectora.com",
        labelPost: "#hábitos_sostenibles",
      },
      {
        id: '4',
        imagePost: "assets/img/pexels-blog5.jpg",
        titlePost: 'Vivir sin plástico',
        contentPost: `Se puede empezar a vivir sin plástico? Los autores de este blog cuentan su experiencia personal
      sobre lo cual han publicado una guía práctica con consejos y alternativas para ayudarnos en el
      camino del residuo cero.`,
        buttonPost: "https://vivirsinplastico.com",
        labelPost: "#residuo_cero",
      },
      {
        id: '5',
        imagePost: "assets/img/blog4.jpeg",
        titlePost: 'Juguetes y reciclado',
        contentPost: `Otra de las tantas formas posibles de comenzar a andar las sendas de la
      sostenibilidad de una manera divertida. Eco-cosas.com ofrece artículos sobre ecología, salud natural,
      como cultivar, bioconstrucción y más.`,
        buttonPost: "Https://ecocosas.com/reciclaje/juguetes-material-reciclado",
        labelPost: "#reciclaje",

      },
      {
        id: '6',
        imagePost: "../../../assets/img/blog7.jpeg",
        titlePost: 'Los gestos cooperan',
        contentPost: `Yve Ramírez confía en que por más pequeños que éstos sean, los gestos cooperan para
      cambiar el mundo. En su blog brinda información y recursos sobre moda, alimentación y
      consejos para llevar una vida de cero residuos.`,
        buttonPost: "https://laecocosmopolita.com",
        labelPost: "#economia_sustentable",
      }


    ];

  constructor() { }


  ngOnInit(): void { }

}

  /*
  public posts: PostI[] | undefined;
  public isLoading: boolean = true;
  public error: boolean = true ;
  public nameQuery: string | undefined;*/
  
  /*constructor(private postService: PostService) { }*/

  /*ngOnInit(): void {}
 
     this.postService
    .getAllArticles() 
      .pipe(
        tap((response) => {
          if (response) {
            this.posts = response;
          } else {
            this.posts = []
            return response;
          }
            this.isLoading = false;
            return response;
          })
          catchError(err => {
            this.error = true;
            this.isLoading = false;
            return throwError(() => new Error("El servidor no respondió. Asegúrese de que se esté ejecutando la API y la base de datos"))
          })
      )
      .subscribe();

  }

 */




