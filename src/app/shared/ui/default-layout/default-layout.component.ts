import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

export interface RecentSurveyElement {
  id: string;
  type: string;
  respondent: string;
  surveyDate: any;
  performanceRating: number;
}

export const uuid4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // tslint:disable-next-line:no-bitwise
    const r = (Math.random() * 16) | 0;
    // tslint:disable-next-line:no-bitwise
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const TABLE_DATA: RecentSurveyElement[] = [
  {
    id: uuid4(),
    type: 'PPR',
    respondent: 'Tester',
    performanceRating: 5,
    surveyDate: new Date(),
  },
];

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {
  isToggled: boolean = false;
  isDarkMode: boolean = false;
  displayedColumns: string[] = [
    'type',
    'respondent',
    'surveyDate',
    'performanceRating',
  ];
  dataSource = TABLE_DATA;

  constructor() {
    const mode = sessionStorage.getItem('dark_mode');
    this.isDarkMode = !!mode && mode === '1';
  }

  toggle(): void {
    this.isToggled = !this.isToggled;
  }

  onChanged(event: MatSlideToggleChange): void {
    document.body.classList.toggle('darkMode');
    sessionStorage.setItem('dark_mode', this.isDarkMode ? '1' : '0');
  }
}
