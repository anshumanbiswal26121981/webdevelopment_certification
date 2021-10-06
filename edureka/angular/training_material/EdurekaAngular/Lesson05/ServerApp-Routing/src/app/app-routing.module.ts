import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ServersComponent } from './servers/servers.component'
import { ServerComponent } from './servers/server/server.component'
import { EditServerComponent } from './servers/edit-server/edit-server.component'
import { ErrorPageComponent } from './error-page/error-page.component'
import { AuthGuard } from './auth-guard.service';
import { ServerResolver } from './servers/server/server-resolver.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'servers',
    canActivateChild: [AuthGuard],  //Child route urls secured with custom Route Guard 
    component: ServersComponent,    
    children: [
      {
        path: ':id',
        component: ServerComponent, resolve: { server: ServerResolver } //maps to component & custom service
                                  //resolve: pre fetches route data before route activation
      },
      {
        path: ':id/edit',   
        component: EditServerComponent, canDeactivate: [CanDeactivateGuard] 
        //maps to component & Route Guard Deactivation custom service
        //canDeactivate : prompts unsaved data changes and navigates away from the current route
      }
    ]
  },
  {
    path: '**',
    component: ErrorPageComponent, data: { message: 'Page not found!' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //register routes with the module
  exports: [RouterModule]
})
export class AppRoutingModule { }
