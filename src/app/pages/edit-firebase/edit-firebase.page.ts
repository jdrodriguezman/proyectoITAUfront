import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-firebase',
  templateUrl: './edit-firebase.page.html',
  styleUrls: ['./edit-firebase.page.scss'],
})
export class EditFirebasePage implements OnInit {

  items = [];
  
  peticion = {
    id: null,
    title: null
  }

  constructor(private firebaseService: FirebaseService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.obtener();
  }

  async edit(){

    console.log(this.peticion);
    

    let respuesta = await this.firebaseService.editFirebase(this.peticion);

    let aviso;

    if(respuesta){
      aviso = {
        header: 'Elemento Editado!',
        subHeader: 'Se ha Editado el elemento',
        buttons: ['Aceptar']
      }

      this.obtener();

    }else{
      aviso = {
        header: 'No se editó el elemento',
        subHeader: 'No se ha Editado el elemento',
        buttons: ['Aceptar']
      }
    }

    let alerta = await this.alertCtrl.create(aviso);

    alerta.present();

  }

  async obtener(){

    let consulta = {
      id: null,
      title: null
    }

    let respuesta:any = await this.firebaseService.obtenerTodos(consulta);
    if(respuesta){
      this.items = Object.values(respuesta);
    }

  }

}
