import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Water } from './wat';
import { IMovie } from '../models/movie.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string='https://api.themoviedb.org/3/movie/now_playing?api_key=fc4a89240a5c6b3f29a2489c2b80c3a0&language=en-US&page=1';
  //private url: string="https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get<IMovie[]>(this.url);
  }
}
