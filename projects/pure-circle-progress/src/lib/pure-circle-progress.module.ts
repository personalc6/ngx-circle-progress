import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PureCircleProgressComponent } from './pure-circle-progress.component';



@NgModule({
  declarations: [PureCircleProgressComponent],
  imports: [
    CommonModule
  ],
  exports: [PureCircleProgressComponent]
})
export class PureCircleProgressModule { }
