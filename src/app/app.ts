import {  Component, signal } from '@angular/core';
import { HeaderComponent } from "./components/header/header";
import { FooterComponent } from "./components/footer/footer";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',  
  imports: [HeaderComponent, FooterComponent, RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tea-project-angular');  

  
  constructor() {

  }

  
}
