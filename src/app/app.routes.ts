import { Routes } from '@angular/router';
import { SelfIntroductionComponent } from './self-introduction/self-introduction.component';

export const routes: Routes = [
  {
    path: 'self-introduction/',
    title: '長島雅人 | 自己紹介',
    component: SelfIntroductionComponent,
  },
  {
    path: 'resume',
    title: '長島雅人 | 職務経歴書',
    loadComponent: () =>
      import('./resume/resume.component').then((m) => m.ResumeComponent),
  },
  { path: '**', redirectTo: 'self-introduction/', pathMatch: 'full' },
];
