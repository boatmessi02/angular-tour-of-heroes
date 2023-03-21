import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
})
export class ConfirmModalComponent {
  closeResult: string = '';
  @ViewChild('confirmModal')
  modalRef: TemplateRef<any> | undefined;

  @Input()
  form: any;

  @Input()
  id: string = '';

  @Input()
  type: 'submit' | 'button' = 'button';

  @Input()
  buttonLabel: string = '';

  @Input()
  paddingCustom: string = '';

  @Input()
  variant: 'submit' | 'cancel' | 'back' | 'default' | 'danger' | 'success' =
    'default';

  @Input()
  leftIcon: string = '';

  @Input()
  iconSize: string = '20px';

  @Input()
  disable: boolean = false;

  @Output()
  onSubmit: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private modalService: NgbModal) {}

  // for debug and styling
  // ngAfterViewInit() {
  //   this.modalService.open(this.modalRef);
  // }

  open() {
    this.modalService
      .open(this.modalRef, { centered: true, size: 'md' })
      .result.then(() => {
        this.onSubmit.emit();
      });
  }
}
