import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://illinois.edu/assets/img/navigation/submenu_about.jpg';
  image2 = 'https://i.ytimg.com/vi/FcvJDKlF9_s/maxresdefault.jpg';
  image3 = 'https://d20t6we9nb6rnn.cloudfront.net/cristinaandsteve/1528837046095-300x300.jpg';
  image4 = 'https://media2.giphy.com/media/xT1XGzXhVgWRLN1Cco/giphy.gif?cid=ecf05e475vdqoh1sk8a64hblpcpps2xgxqymrefo9gfsn1yv&rid=giphy.gif&ct=g';

  constructor() { }

  ngOnInit() {
  }

}