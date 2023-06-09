import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss'],
})
export class ChildComponentComponent implements OnInit {
  @Input() number!: number;
  numberViewChild!: number;
  constructor() {}

  ngOnInit(): void {}
}
