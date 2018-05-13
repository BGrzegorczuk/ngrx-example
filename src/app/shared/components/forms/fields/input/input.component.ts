import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input, OnChanges,
  OnInit, SimpleChanges,
  ViewChild
} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

export type InputValue = string | number | null;


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements OnInit, OnChanges {
  @ViewChild('input') input: ElementRef;
  @Input() parentGroup: FormGroup;
  @Input() name = '';
  @Input() label? = '';
  @Input() type? = '';
  @Input() disabled? = false;

  id: string;
  prevValue: InputValue;

  /* Getters & Setters */

  get value(): InputValue {
    return this.input.nativeElement.value;
  }


  set value(newValue: InputValue) {
    this.input.nativeElement.value = newValue;
    this.prevValue = newValue;
  }

  get control(): FormControl {
    return this.parentGroup.get(this.name) as FormControl;
  }

  /* Lifecycle Methods */

  constructor() { }

  ngOnInit() {
    this.initControlState();
    this.registerHandlers();
  }

  ngOnChanges({disabled}: SimpleChanges) {
    const disabledChanges = disabled && !disabled.firstChange && (disabled.currentValue !== disabled.previousValue);
    if (disabledChanges) {
      disabled.currentValue === true ? this.control.disable() : this.control.enable();
    }
  }

  /* Component Logic */

  private initControlState() {
    this.id = `${this.name}Id`;
    this.type || (this.type = 'text');
    this.value = this.control.value;
    this.disabled && this.control.disable({emitEvent: false});
  }

  private registerHandlers() {
    this.control.registerOnDisabledChange(this.handleDisabledChange);
    this.control.registerOnChange(this.handleValueChange);
  }

  onBlur() {
    if (this.control.untouched) {
      this.control.markAsTouched();
    }
    if (this.hasChanged()) {
      this.control.setValue(this.value);
      this.prevValue = this.value;
      this.control.markAsDirty();
    }
  }

  private hasChanged(): boolean {
    return this.prevValue !== this.value;
  }

  /* FormControl API handlers */

  private handleDisabledChange = (disabled: boolean) => {
    this.input.nativeElement.disabled = disabled;
  }

  private handleValueChange = (newValue: any) => {
    this.value = newValue;
  }
}
