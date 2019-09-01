import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos/todos.service';

@Component({
  selector: 'app-listar-todos',
  templateUrl: './listar-todos.page.html',
  styleUrls: ['./listar-todos.page.scss'],
})
export class ListarTodosPage implements OnInit {

  public todos;

  public id;
  public title;


  
  constructor(private todosService: TodosService) { }

  async ngOnInit() {

    this.obtener();

  }

  obtener(){

    let consulta = {
      id: this.id,
      title: this.title
    }

    this.todosService.obtenerTodos(consulta).then(
      data => {
        this.todos = data;
      }
    ).catch(
      error => {
        console.warn(error);
      }
    )
  }

}
