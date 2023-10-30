import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListPage } from './pages/client-list-page.component';
import { Filho1PageComponent } from './pages/filho1-page.component';
import { Filho2PageComponent } from './pages/filho2-page.component';
import { PaiPageComponent } from './pages/pai.component';
import { UserGuard } from './guards/user.guard';
import { LoginPageComponent } from './pages/login-page.component';
import { ClienteDetalhePageComponent } from './pages/client-detalhe-page.component ';
import { RXJSPageComponent } from './pages/rxjs-page.component';
import { ListaPessoasPage } from './pages/lista-pessoas-page.component';
import { UserPageComponent } from './pages/user-page.component';
import { HeaderComponent } from './components/header/header.component';
import { PessoaAddPageComponent } from './pages/pessoa-add-page/pessoa-add-page.component';

const routes: Routes = [
  {path: 'client', 
  component:ClientListPage,
  canActivate: [UserGuard]
},{
  path: 'pai', component: PaiPageComponent,
  children: [
    {path: 'filho1', component:Filho1PageComponent},
    {path: 'filho2', component:Filho2PageComponent}
    ],  
},
  {path: 'login', component: LoginPageComponent,},
  {path:'client/detalhe/:id', component: ClienteDetalhePageComponent},
  {path: 'rxjs', component: RXJSPageComponent},
  {path: 'pessoas', component: ListaPessoasPage},
  {path: 'user', component: UserPageComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'cadastro/pessoa', component: PessoaAddPageComponent},
//   {path: 'modulo1', 
//   loadChildren: () => import('./modulo1/modulo1.component').then(m => m.Modulo1Module)
// },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

