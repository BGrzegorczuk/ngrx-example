import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  @Input() label = '';
  @Input() name = '';
  @Input() id = '';
  _value = '';

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.propagateChange(this._value);
  }

  constructor() { }

  propagateChange = (_: any) => {};

  propagateTouched = () => {};

  writeValue(value: string | null) {
    value ? this.value = value : null;
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn) {
    this.propagateTouched = fn;
  }

  onChange(event: Event) {
    const newValue = (<HTMLInputElement>event.target).value;
    this.value = newValue;
  }

  onBlur() {
    this.propagateTouched();
  }
}
