import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  static i = 1;

  @Input() item;

  constructor() {
    console.log('child2', Child2Component.i++);
  }

  ngOnInit(): void {
  }

}
