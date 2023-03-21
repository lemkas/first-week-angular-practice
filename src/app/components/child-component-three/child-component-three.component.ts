import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component-three',
  templateUrl: './child-component-three.component.html',
  styleUrls: ['./child-component-three.component.scss'],
})
export class ChildComponentThreeComponent implements OnInit {
  @ContentChild('paragraph') paragraph!: ElementRef;

  changeValue() {
    this.paragraph.nativeElement.textContent = 'changed';
  }

  ngOnInit(): void {}
}
