import { Component, OnInit } from '@angular/core';
import { ArtService } from "../../services/art.service";
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public obra:any;

  constructor(
    private _obrasServices: ArtService,
  ) { }

  ngOnInit() {

    this._obrasServices.getArtById(50).subscribe(respObra => {
      this.obra = respObra;
    });

  }

}
