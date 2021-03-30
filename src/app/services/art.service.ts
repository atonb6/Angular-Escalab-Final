import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Art } from '../interfaces/Art';
import { AllDeps } from '../interfaces/allDeps';
import { AllList } from '../interfaces/allList';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  constructor(
    private HttpClient: HttpClient
  ) { }

  getAllDeparments(): Observable<AllDeps[]>{
   return this.HttpClient.get<AllDeps[]>('https://collectionapi.metmuseum.org/public/collection/v1/departments');
  }

  getAllArt(): Observable<AllList[]>{
    return this.HttpClient.get<AllList[]>('https://collectionapi.metmuseum.org/public/collection/v1/objects');
  }

  getArtById(id: any): Observable<Art>{
    return this.HttpClient.get<Art>('https://collectionapi.metmuseum.org/public/collection/v1/objects/'+id);
  }
}


