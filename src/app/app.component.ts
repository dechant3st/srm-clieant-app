import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'srm-client-app';

  ngOnInit(): void {
    const mode = sessionStorage.getItem('dark_mode');

    document.body.classList.remove('darkMode');

    if (!!mode && mode === '1') {
      document.body.classList.add('darkMode');
    }
  }
}
