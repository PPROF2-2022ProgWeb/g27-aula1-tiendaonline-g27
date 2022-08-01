import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {
  @Input() images: Image[] = [];
  @Input() sliderId: string = "carouselExampleDark";
  @Input() backgroundColor: string = "transparent";
  @Input() hasPadding: boolean = false;
  @Input() timeInterval: number = 2500;
  @Input() hasSideButtons: boolean = true;
  @Input() hasControllers: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
