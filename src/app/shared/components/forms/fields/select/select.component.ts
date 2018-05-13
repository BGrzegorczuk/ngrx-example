import {Component, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup} from '@angular/forms';
import {IObject} from '../../../../interfaces/structures';

type SelectOptionType = 'string' | number | IObject<string|number>;

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass']
})
export class SelectComponent implements ControlValueAccessor, OnInit {

  @Input() parentGroup: FormGroup;
  @Input() options: SelectOptionType[];
  @Input() labelKey = 'label';
  @Input() valueKey = 'value';
  @Input() name = '';
  @Input() label? = '';
  id: string;
  _value = null;

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.propagateChange(this._value);
  }

  get invalid(): boolean {
    return false;
  }

  get control(): FormControl {
    return this.parentGroup.get(this.name) as FormControl;
  }

  constructor() { }

  ngOnInit() {
    this.id = `${this.name}Id`;
  }

  propagateChange: Function = (_: any) => {};

  propagateTouched: Function = () => {};

  writeValue(value: any) {
    console.log('writeValue', value);
    value ? this.value = value : null;
  }

  registerOnChange(fn: Function) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.propagateTouched = fn;
  }

  onChange(value: any) {
    console.log('value', value);
    // this.value = (<HTMLInputElement>event.target).value;
  }

  onBlur() {
    if (this.control.untouched) {
      this.propagateTouched();
    }
  }

  onFocus() {
    console.log('onFocus');
  }

}
