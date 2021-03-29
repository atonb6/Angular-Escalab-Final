import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Art } from '../interfaces/Art';
import { Allart } from '../interfaces/allArt';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  constructor(
    private HttpClient: HttpClient
  ) { }

  getAllArt(): Observable<Allart[]>{
   return this.HttpClient.get<Allart[]>('https://collectionapi.metmuseum.org/public/collection/v1/departments');
  }


  getArtById(id: any): Observable<Art>{
    return this.HttpClient.get<Art>('https://collectionapi.metmuseum.org/public/collection/v1/objects/'+id);
  }
}


