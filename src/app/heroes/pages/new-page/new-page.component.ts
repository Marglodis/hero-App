import { Component } from '@angular/core';

@Component({
  selector: 'app-new-page',
  standalone: false,
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent {
  public publishers = [
    {id: 'DC Comics', name: 'DC Comics'},
    {id: 'Marvel Comics', name: 'Marvel Comics'}]

}
