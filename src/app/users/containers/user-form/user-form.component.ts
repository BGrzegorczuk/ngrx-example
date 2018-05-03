import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IUser} from '../../models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  private user: IUser;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();

    this.userForm.valueChanges.subscribe(form => console.log('form changed', form));
  }

  createForm() {
    this.userForm = this.fb.group({
      email: 'jakiś email',
      gender: 'jakiś gender',
      range: '0|10'
    });
  }

}
