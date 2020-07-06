import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  static i = 1;

  @Input() item;

  constructor() {
    console.log('child', ChildComponent.i++);
  }

  ngOnInit(): void {
  }

}
