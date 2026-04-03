import { Component } from '@angular/core';
import {Carousel} from '../../components/carousel/carousel';
import {Tabs} from '../../components/tabs/tabs';
import {IntegranteCard} from '../../components/integrante-card/integrante-card';

@Component({
  selector: 'app-home',
  imports: [
    Carousel,
    Tabs,
    IntegranteCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
