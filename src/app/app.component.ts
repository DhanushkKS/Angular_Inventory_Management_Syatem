import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  MatSlideToggleChange,
  MatSlideToggleModule,
} from '@angular/material/slide-toggle';

import { ThemePalette } from '@angular/material/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatAnchor } from '@angular/material/button';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatSlideToggleModule,
    MatToolbar,
    MatAnchor,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'InventoryManagementSystem';

  color: ThemePalette = 'primary';
}
