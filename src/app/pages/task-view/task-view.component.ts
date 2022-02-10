import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';
import { List } from 'src/app/models/list-model';
import { Task } from 'src/app/models/task-model';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

lists: List[];
tasks: Task[];

selectedListId: string;

  constructor( private route: ActivatedRoute, private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // console.log(params);
      if(params.listId) {
        this.selectedListId = params.listId;
        this.taskService.getTasks(params.listId).subscribe((tasks: Task[]) => {
          this.tasks = tasks;
        })
      }
      else {
        this.tasks = undefined;
      }
      
    })

  
  this.taskService.getLists().subscribe((lists: List[]) => {
    this.lists = lists;
  })
  }

  onTaskClick(task: Task) {
    // set task to completed (i.e cancel task)
    this.taskService.complete(task).subscribe(() => {
      console.log('completed successfully!');
      task.completed = !task.completed;
    })
  }

  onDeleteListClick() {
    this.taskService.deleteList(this.selectedListId).subscribe((res: any) => {
      this.router.navigate(['/lists']);
      console.log(res);
    })
  }

  onDeleteTaskClick(id: string) {
    this.taskService.deleteTask(this.selectedListId, id).subscribe((res: any) => {
    this.tasks = this.tasks.filter(val => val._id !== id);
      // this.router.navigate(['/lists']);
      console.log(res);
    })
  }

}
