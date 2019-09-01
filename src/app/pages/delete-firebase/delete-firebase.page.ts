import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-delete-firebase',
  templateUrl: './delete-firebase.page.html',
  styleUrls: ['./delete-firebase.page.scss'],
})
export class DeleteFirebasePage implements OnInit {

  id = null;

  items = [];


  constructor(private firebaseService: FirebaseService, private alertCtrl : AlertController, private refresh: ChangeDetectorRef) { }

  ngOnInit() {

    this.obtener();

  }

  async borrar(){

    let dato = await this.firebaseService.borrarFirebase(this.id);
  
    let aviso;

    console.log(dato);
  
    aviso = {
      header: 'Elemento eliminado!',
      subHeader: 'Se ha eliminado el elemento',
      buttons: ['Aceptar']
    }

    
    let alerta = await this.alertCtrl.create(aviso);
    
    alerta.present();
    await this.obtener();

  }


  async obtener(){

    let consulta = {
      id: null,
      title: null
    }

    let respuesta:any = await this.firebaseService.obtenerTodos(consulta);
    if(respuesta){
      console.log("se cargó");
      this.items = Object.values(respuesta);
    }else{
      console.log("no cargo");
      this.items = Object.values({});
      this.refresh.detectChanges();
      console.log(this.items);
    }
    

  }

}
