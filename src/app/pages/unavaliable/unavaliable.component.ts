import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-unavaliable',
  imports: [MatCardModule,RouterLink,RouterLinkActive],
  templateUrl: './unavaliable.component.html',
  styleUrl: './unavaliable.component.css'
})
export class UnavaliableComponent {

}
