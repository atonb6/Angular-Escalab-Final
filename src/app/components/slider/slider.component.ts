import { Component, OnInit } from '@angular/core';
import { ArtComponent } from '../../art/components/art/art.component';;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  
  public art: ArtComponent;

  constructor() { }

  ngOnInit() {
    
  }

}
