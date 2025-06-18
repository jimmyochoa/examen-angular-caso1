import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private apiUrl = 'https://images-api.nasa.gov/search?q=galaxy&media_type=image';

  constructor(private http: HttpClient) {}

  getGalaxyImages(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }
}
