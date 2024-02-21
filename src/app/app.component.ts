import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'onewayDatabinding';
  // uname = "Vaishnavi";
  // ucolor = "red";
  // apply = "a b c d";
  uname = "Navi"
  // iname = "Vaishu"
  but(val: any) {
    this.uname = val
    console.log(val)
  }
  // but() {
  //   alert('Hello')
  // }
  // but() {
  //   prompt('Hello')
  // }
  // but() {
  //   console.log('Hello')
  // }
}
