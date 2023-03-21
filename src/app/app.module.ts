import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { ChildComponentTwoComponent } from './components/child-component-two/child-component-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    ParentComponentComponent,
    ChildComponentTwoComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
