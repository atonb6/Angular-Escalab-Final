import { Component, OnInit } from "@angular/core";
import { Allart } from "../../../interfaces/allArt";
import { ArtService } from "../../../services/art.service";

@Component({
  selector: "app-art-list",
  templateUrl: "./art-list.component.html",
  styleUrls: ["./art-list.component.scss"],
})
export class ArtListComponent implements OnInit {

  public allArt: Allart[];

  constructor(
    private artService: ArtService
    ) {
    artService.getAllArt().subscribe(respAllArt => {
      this.allArt = respAllArt;
    });
  }

  ngOnInit() {
    console.log(this.allArt);
  }
}
