import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes  = [
  {path: '', component: LoginFormComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'dashboard', component: DashboardComponent
                }
            // {path: 'members/:id', component: MemberDetailComponent,
            //     resolve: {user: MemberDetailResolver}},
            // {path: 'member/edit', component: MemberEditComponent,
            //     resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges] },
            // {path: 'messages', component: MessagesComponent,
            //     resolve: {messages: MessagesResolver}},
            // {path: 'lists', component: ListsComponent, resolve: {users: ListsResolver}},
            // {path: 'admin', component: AdminPanelComponent, data: {roles: ['Admin', 'Moderator']}},
        ]
    },
    {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
