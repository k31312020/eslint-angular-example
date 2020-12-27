import {Component, OnInit} from '@angular/core';
import {NewService} from '../new.service';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.scss']
})
export class SecondComponentComponent implements OnInit {

  name: string = 'kuenzang';

  someObject = {
    name: '',
    age: '',
    profiles: {}
  };

  nameNew = 'name';

  constructor(private service: NewService) {
  }

  ngOnInit(): void {

  }

  useService(type: string, name: string): void {
    const newNewName: string = 'kuenzang';
    const newName = {
      name: ''
    };
    console.log(name);
    console.log(type);
    this.service.common();
    this.ngOnInit();
  }

  getName(): string {
    return this.name;
  }

  someFunction(): void {
    if (this.name) {
    }
  }

}
