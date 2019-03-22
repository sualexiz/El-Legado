import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: any;
  mySlideImages = [1, 2, 3].map((i) => `assets/img/slides/${i}.jpg`);
  myCarouselImages = [ 1, 2, 3, 4, 5, 6].map((i) => `https://picsum.photos/640/480?image=${i}`);
  mySlideOptions = {items: 1, dots: true, nav: false};
  myCarouselOptions = {items: 3, dots: true, nav: true};

  constructor() {

}

  ngOnInit() {
  }

}
