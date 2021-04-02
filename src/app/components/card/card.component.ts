import { Component, OnInit, Input } from '@angular/core';
import { ArtService } from "../../services/art.service";
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public obra:any = {};

  constructor(
    private _obrasServices: ArtService,
  ) { }

  @Input() counter: number;

  ngOnInit() {

    this._obrasServices.getArtById(50).subscribe(respObra => {
      this.obra = respObra;

      console.log('ResponseID-->', respObra)
    });

  }

  getUrl()
{
  return "url(" + this.obra.primaryImageSmall + ")";
}

}
