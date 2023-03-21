import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MultiSelect } from 'src/app/interface/MultiSelect';

interface Submit {
  type: string;
  data: MultiSelect[];
}

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
})
export class MultiSelectComponent implements OnInit {
  @Input()
  list: MultiSelect[] = [];

  @Input()
  selectedList: MultiSelect[] = [];

  @Input()
  multiSelectTitle: string = '';

  @Input()
  placeholder: string = '';

  @Input()
  hasInput: boolean = false;

  @Input()
  dragAndDrop: boolean = false;

  @Output()
  onSubmit: EventEmitter<Submit> = new EventEmitter<Submit>();

  filteredList: MultiSelect[] = [];

  searchText: string = '';

  toggle: boolean = false;

  empty: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.onSubmit.emit({
      type: this.multiSelectTitle,
      data: this.selectedList,
    });
  }

  onDrop(event: CdkDragDrop<MultiSelect[]>) {
    moveItemInArray(this.selectedList, event.previousIndex, event.currentIndex);
  }

  onRemove(i: number): void {
    if (this.selectedList.length < 0) return;

    // remove member from array by index
    let tempSelectedList: MultiSelect[] = this.selectedList;
    tempSelectedList.splice(i, 1);
    this.selectedList = tempSelectedList;

    // send selected member to parent
    this.onSubmit.emit({
      type: this.multiSelectTitle,
      data: this.selectedList,
    });

    if (tempSelectedList.length == 0) this.empty = true;
    else this.empty = false;
  }

  onSearch(): void {
    this.toggle = true;
    if (this.searchText == '') {
      this.filteredList = [];
      this.toggle = false;
      return;
    }
    // filtered member contain only member that includes searchText
    this.filteredList = this.list.filter((member) =>
      member.name
        .toLocaleLowerCase()
        .includes(this.searchText.toLocaleLowerCase())
    );
    // update dropdown
    this.selectedList.map((selected) => {
      this.filteredList = this.filteredList.filter(
        (filtered) => selected.id !== filtered.id
      );
    });
  }

  onSelect(selected: MultiSelect): void {
    this.empty = false;
    // update selected member array
    this.selectedList.push(selected);
    //clear default value
    this.filteredList = [];
    this.searchText = '';
    this.toggle = false;

    // send selected member to parent
    this.onSubmit.emit({
      type: this.multiSelectTitle,
      data: this.selectedList,
    });
  }

  onShowAll(event: MouseEvent) {
    event.preventDefault();
    this.toggle = !this.toggle;
    if (!this.toggle) return;

    // Shows all member who are not selected.
    this.filteredList = this.list;
    this.selectedList.map((selected) => {
      this.filteredList = this.filteredList.filter(
        (filtered) => selected.id !== filtered.id
      );
    });
  }
}
