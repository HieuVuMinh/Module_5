import { Component, OnInit } from '@angular/core';
import {Song} from '../model/song';
import {SongService} from '../service/song.service';

@Component({
  selector: 'app-youtube-playlist',
  templateUrl: './youtube-playlist.component.html',
  styleUrls: ['./youtube-playlist.component.scss']
})
export class YoutubePlaylistComponent implements OnInit {
  playlist: Song[] = [];

  constructor(private songService: SongService) { }

  ngOnInit() {
    this.getAll();
  }

  private getAll() {
    this.playlist = this.songService.playlist;
  }
}