import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://i.ytimg.com/vi/FcvJDKlF9_s/maxresdefault.jpg';
  image3 = 'https://d20t6we9nb6rnn.cloudfront.net/cristinaandsteve/1528837046095-300x300.jpg';

  constructor() { }

  ngOnInit() {
  }

}