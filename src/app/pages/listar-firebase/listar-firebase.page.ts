import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-listar-firebase',
  templateUrl: './listar-firebase.page.html',
  styleUrls: ['./listar-firebase.page.scss'],
})
export class ListarFirebasePage implements OnInit {

  firebases = [];

  firebasesIds = [];

  public id;
  public title;


  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.obtener();
  }

  async obtener(){

    let consulta = {
      id: this.id,
      title: this.title
    }

    let respuesta:any = await this.firebaseService.obtenerTodos(consulta);
    if(respuesta){
      this.firebases = Object.values(respuesta);
      this.firebasesIds = Object.keys(respuesta);
    }

  }

}
