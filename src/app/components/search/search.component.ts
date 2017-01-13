import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.services';
import { Artist } from './../../../interfaces/Artist';

@Component({
  // moduleId: module.id,
  selector: 'app-search',
  templateUrl: './search.component.html'
})

export class SearchComponent {

  searchStr: string;
  searchRes: Artist[];

  constructor(private _spotifyService: SpotifyService) { }

  searchMusic() {
    // console.log(this.searchStr);
    this._spotifyService.searchMusic(this.searchStr).subscribe(res => {
      console.log(res);
      console.table(res.artists.items);
      this.searchRes = res.artists.items;
    });
  }

}
