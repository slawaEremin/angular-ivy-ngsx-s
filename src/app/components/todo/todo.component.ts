import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, ElementRef} from '@angular/core';
import {TodoModel} from '../../models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  @ViewChild('input') input: ElementRef;

  @Input() todo: TodoModel;
  @Output() complete = new EventEmitter<boolean>();
  @Output() remove = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  change(): void {
    this.complete.emit(this.input.nativeElement.checked)
  }

  onRemove(id: string): void {
    this.remove.emit(id);
  }
}