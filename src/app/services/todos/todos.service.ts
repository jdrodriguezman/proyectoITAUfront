import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) {}

  async obtenerTodos(consulta?:{id: null, title: null}){

    let consumo = 'https://itau-daniela.herokuapp.com/my-project-itau/todos'

    if(consulta.id && consulta.title){
      consumo =`${consumo}?id=${consulta.id}&title=${consulta.title}`
    }else if(consulta.id){
      consumo =`${consumo}?id=${consulta.id}`
    } else if (consulta.title){
      consumo =`${consumo}?title=${consulta.title}`
    }

    return await new Promise((resolve, reject)=>{
      this.http.get(consumo).subscribe(
        success => {
          resolve(success);
        },
        error => {
          reject(error);
        }
      )
    });
  
  }

}
