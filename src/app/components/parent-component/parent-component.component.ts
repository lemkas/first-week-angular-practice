import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponentTwoComponent } from '../child-component-two/child-component-two.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss'],
})
export class ParentComponentComponent implements OnInit, AfterViewInit {
  constructor() {}
  number: number = this.getRandomNumber();
  @ViewChild(ChildComponentTwoComponent, { static: false })
  private child!: ChildComponentTwoComponent;

  ngAfterViewInit(): void {
    this.child.number = this.getRandomNumber();
  }

  ngOnInit(): void {}

  getRandomNumber(): number {
    return Math.random();
  }
}
