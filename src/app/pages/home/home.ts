import { Component } from '@angular/core';
import {Carousel} from '../../components/carousel/carousel';
import {ImgDirective} from '@coreui/angular';
import {Tabs} from '../../components/tabs/tabs';
import {IntegranteCard} from '../../components/integrante-card/integrante-card';

@Component({
  selector: 'app-home',
  imports: [
    Carousel,
    ImgDirective,
    Tabs,
    IntegranteCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
