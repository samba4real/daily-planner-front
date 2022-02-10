import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import {Task} from 'src/app/models/task-model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  listId: string;

  constructor( private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.listId = params['listId'];
      // console.log(this.listId)
    })
  }
 
  createTask(title: string, listId: string) {
    this.taskService.createTask(title, this.listId).subscribe((task: Task) => {
      this.router.navigate(['../'], { relativeTo: this.route});
    })
  }
}
