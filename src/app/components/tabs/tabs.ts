import {Component} from '@angular/core';
import {Tabs2Module} from '@coreui/angular';
import {TabPanel} from '../tab-panel/tab-panel';

@Component({
  selector: 'app-tabs',
  imports: [Tabs2Module, TabPanel],
  standalone: true,
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
})
export class Tabs {
  weeks = [
    {
      key: 0,
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 1,
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 2,
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 3,
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 4,
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 5,
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 6,
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 7,
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 8,
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 9,
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 10,
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 11,
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 12,
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 13,
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 14,
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 15,
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
  ]
}
