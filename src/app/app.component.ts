import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Demo1';
  // names=["jason","carl","virat"]
  // getName(name: String)
  // {
  //   alert(name)
  // }

  // for event
  // clickEvent(evt: string)
  // {
  //   console.log(evt)
  // }

  // Property Binding
  name ="Ferrari"
  disableBox = true;

  enableBox()
  {
    this.disableBox=false;
  }
  printEvent(evt: string)
  {
    console.log(evt);
    
  }


}
