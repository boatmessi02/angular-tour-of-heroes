import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ButtonComponent } from './button/button.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [MultiSelectComponent, ButtonComponent, ConfirmModalComponent],
  imports: [CommonModule, RouterModule,ReactiveFormsModule, FormsModule,DragDropModule],
  exports: [MultiSelectComponent,ButtonComponent,ConfirmModalComponent],
})
export class SharedModule {}
