import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { JumbotronComponent } from '../../components/jumbotron/jumbotron.component';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, JumbotronComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
