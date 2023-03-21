import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component-two',
  templateUrl: './child-component-two.component.html',
  styleUrls: ['./child-component-two.component.scss'],
})
export class ChildComponentTwoComponent implements OnInit {
  number!: number;
  constructor() {}

  ngOnInit(): void {}
}
