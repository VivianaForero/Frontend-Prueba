import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class PersonasService {


  private url: string = '/api/users';

  constructor(private http: HttpClient) { }

  getPersonas(){
    return this.http.get(this.url);
  }

  postPersona(body: any){
    
    try { 
      return this.http.post(this.url, body, {
        headers: {'Content-type': 'application/json'}
    });
    } catch (error) {
      console.log(error,'eroor')
    }
  }

}
