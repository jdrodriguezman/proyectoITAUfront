import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient,private loadingCtrl: LoadingController) {}

  async obtenerTodos(consulta?:{id: null, title: null}){

    let consumo = 'https://itau-daniela.herokuapp.com/my-project-itau/content'

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
          reject(null);
        }
      )
    });
  
  }

  async crearFirebase(body: any){

    let loading = await this.loadingCtrl.create();

    await loading.present();

    let consumo = 'https://itau-daniela.herokuapp.com/my-project-itau/content'

    let datos = await new Promise((resolve, reject)=>{
      this.http.post(consumo,body).subscribe(
        success => {
          resolve(success);
        },
        error => {
          reject(error);
        }
      )
    });

    await loading.dismiss();
  
    return datos;

  }

  async editFirebase(body: any){

    let loading = await this.loadingCtrl.create();

    await loading.present();

    console.log(body);

    let consumo = `https://itau-daniela.herokuapp.com/my-project-itau/content/${body.id}`

    let datos = await new Promise((resolve, reject)=>{
      this.http.put(consumo,body).subscribe(
        success => {
          resolve(success);
        },
        error => {
          reject(error);
        }
      )
    });

    await loading.dismiss();
  
    return datos;

  }

  async borrarFirebase(id){

    let loading = await this.loadingCtrl.create();

    await loading.present();

    let consumo = `https://itau-daniela.herokuapp.com/my-project-itau/content/${id}`
    let datos
    try{
        datos = await new Promise((resolve, reject)=>{
        this.http.delete(consumo).subscribe(
          success => {
            resolve(success);
          },
          error => {
            reject(error);
          }
        )
      });
    } catch(exception){
      datos = null;
    }
    
    await loading.dismiss();
  
    return datos;

  }

}
