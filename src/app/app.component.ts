import { Component } from '@angular/core';
import { Track } from './track';
import { Artist } from './artist';
import { TrackService } from './track.service';
import { MockTrackService } from './mock-track.service';
import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recentes: Track[];
  top4: Track[];
  loadingRecently = true;

  constructor(private trackService: TrackService, mockTrackService: MockTrackService) {
    this.top4 = trackService.getTop4();
    // mockTrackService.syncArtists();
    this.loadingRecently = false;
    trackService.getTracks().subscribe(tracks => {
      this.recentes = tracks;
      this.loadingRecently = false;
    }, error => {
      this.loadingRecently = false;
    });
  }
}
