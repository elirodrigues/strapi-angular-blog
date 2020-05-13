import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { EllipsisPipe } from './pipes/ellipsis.pipe';


@NgModule({
  
  declarations: [EllipsisPipe],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports :[
  	EllipsisPipe
  ]
})
export class SharedModule { }
