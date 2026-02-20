import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main';
import { RouterLink } from '@angular/router';
import {
  NgbAccordionButton,
  NgbAccordionDirective,
  NgbAccordionItem,
  NgbAccordionHeader,
  NgbAccordionToggle,
  NgbAccordionBody,
  NgbAccordionCollapse
} from '@ng-bootstrap/ng-bootstrap/accordion';
import { SharedModule } from '../../shared/shared-module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,    
    NgbAccordionButton,
    NgbAccordionDirective,
    NgbAccordionItem,
    NgbAccordionHeader,
    NgbAccordionToggle,
    NgbAccordionBody,
    NgbAccordionCollapse,
    RouterLink,  
    SharedModule
  ]  
})
export class MainModule { }
