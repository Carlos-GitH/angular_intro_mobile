import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './guards/header.component';
// import { ComponentModule } from './components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientListPage } from './pages/client-list-page.component';
import { ParentRoutingModule } from './parent-routing.module';
import { BindingPageComponent } from './pages/binding-page.component';
import { CustomUpperCasePipe } from './pipe/custom-uppercase.pipe';
import { ClientService } from './services/client.service';
import { Filho1PageComponent } from './pages/filho1-page.component';
import { Filho2PageComponent } from './pages/filho2-page.component';
import { PaiPageComponent } from './pages/pai.component';
import { LoginPageComponent } from './pages/login-page.component';
import { ClienteDetalhePageComponent } from './pages/client-detalhe-page.component ';
import { RXJSPageComponent } from './pages/rxjs-page.component';
import { ListaPessoasPage } from './pages/lista-pessoas-page.component';
import { HttpClientModule } from '@angular/common/http';
import { UserPageComponent } from './pages/user-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './components/header/header.component';
import { PessoaAddPageComponent } from './pages/pessoa-add-page/pessoa-add-page.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    ClientListPage,
    // Child1Component,
    BindingPageComponent,
    CustomUpperCasePipe,
    PaiPageComponent,
    Filho1PageComponent,
    Filho2PageComponent,
    LoginPageComponent,
    ClienteDetalhePageComponent,
    RXJSPageComponent,
    ListaPessoasPage, 
    UserPageComponent,
    HeaderComponent,
    PessoaAddPageComponent,
  ],
  imports: [
    BrowserModule,
    // ComponentModule,
    AppRoutingModule,
    FormsModule,
    ParentRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
