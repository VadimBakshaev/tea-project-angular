import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
import { RouterLink } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap/collapse';
import { ModalComponent } from './modal/modal';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,    
    RouterLink, 
    NgbCollapse   
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ModalComponent
  ]
})
export class SharedModule { }
