import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  ContentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'D_Patel_Cartoons';
}
