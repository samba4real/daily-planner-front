import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { EditListComponent } from './pages/edit-list/edit-list.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'new-list', component: NewListComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'lists', component: TaskViewComponent},
  {path: 'edit-list/:listId', component: EditListComponent},
  {path: 'lists/:listId', component: TaskViewComponent},
  {path: 'lists/:listId/new-task', component: NewTaskComponent},
  {path: 'lists/:listId/edit-task/:taskId', component: EditTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
