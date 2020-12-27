import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NewService} from '../new.service';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent implements OnInit, OnDestroy {

  age = '';
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private service: NewService) { }

  ngOnInit() {
    console.log('starting component');
    this.buildForm();
    this.getUserList();
  }

  buildForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
    });
  }

  useService() {
    this.service.common();
  }

  logUserIn() {
    if(this.userForm.valid) {

    }
  }
  getUserList() {

  }

  showDetails() {
    console.log(this.name, this.age);
  }

  view() {
    console.log(this.name);
  }

  ngOnDestroy() {
    console.log('new component was destroyed');
  }

}
