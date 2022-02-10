import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Task } from './models/task-model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor( private webReqService: WebRequestService) { }

  getLists() {
    // getting all lists 
    return this.webReqService.get('lists');
  }

  createList(title: string ) {
    // api to create new list
    return this.webReqService.post('lists', {title});
  }

  updateList(id: string, title: string ) {
    // api to update existing list
    return this.webReqService.patch(`lists/${id}`, { title });
  }

  deleteList(id: string) {
    return this.webReqService.delete(`lists/${id}`);
  }


  getTasks(listId: string) {
    // getting all tasks
    return this.webReqService.get(`lists/${listId}/tasks`);
  }

  createTask(title: string, listId:string ) {
    //api to create new task
    return this.webReqService.post(`lists/${listId}/tasks`, {title});
  }

  deleteTask(listId: string, taskId: string) {
    return this.webReqService.delete(`lists/${listId}/tasks/${taskId}`)
  }

  updateTask(listId: string, taskId: string, title: string) {
      return this.webReqService.patch(`lists/${listId}/tasks/${taskId}`, {title});
  }

  complete(task: Task) {
     return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`, {
       completed: !task.completed
     });
  }
}
