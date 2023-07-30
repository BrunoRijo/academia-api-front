import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MenuComponent } from './views/menu/menu.component';

import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {AlunoListComponent } from './views/home/aluno-list.component';
import {NewAlunoComponent } from './views/aluno/new-aluno/new-aluno.component';
import {HttpClientModule } from '@angular/common/http';
import {NewAlunoModule } from './views/aluno/new-aluno/new-aluno.module';
import {ReactiveFormsModule } from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AlunoListComponent,
    NewAlunoComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    NewAlunoModule,
    ReactiveFormsModule,
    MatInputModule,
    NgIf,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
