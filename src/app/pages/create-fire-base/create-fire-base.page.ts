import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-fire-base',
  templateUrl: './create-fire-base.page.html',
  styleUrls: ['./create-fire-base.page.scss'],
})
export class CreateFireBasePage implements OnInit {

  firebase = {id:null, title: null};

  constructor(private firebaseService: FirebaseService, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async crear(){

    let dato = await this.firebaseService.crearFirebase(this.firebase);
    
    let aviso;

    if(dato){
      aviso = {
        header: 'Elemento Creado!',
        subHeader: 'Se ha Creado el elemento',
        buttons: ['Aceptar']
      }
    }else{
      aviso = {
        header: 'No se creó el elemento',
        subHeader: 'No se ha Creado el elemento',
        buttons: ['Aceptar']
      }
    }

    let alerta = await this.alertCtrl.create(aviso);

    alerta.present();

  }

}
