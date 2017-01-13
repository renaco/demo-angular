import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../../../interfaces/Artist';
import { Album } from '../../../interfaces/Almuns';
import { SpotifyService } from '../../services/spotify.services';

@Component({
  selector: 'app-artist',
  template: `
    <div *ngIf="artist" class="col">
      {{ artist.name }}
    </div>
    <h3>Artist Detail</h3>
  `,
  // templateUrl: './artist.component.html',
  styles: []
})

export class ArtistComponent implements OnInit {
  id: string;
  artist: Artist[];
  albums: Album[];

  constructor(
    private _spotifyService: SpotifyService,
    private _route: ActivatedRoute) {

  }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getArtist(id)
          .subscribe(artist => {
              this.artist = artist;
          })
      });
    }
}
