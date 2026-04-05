import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';
import {ElementNotAvailable} from './components/modals/element-not-available/element-not-available';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ElementNotAvailable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('IA-Hugo-Vega');
}
