import { Component, OnInit } from '@angular/core';
import { Songs } from './shared/songs';
import { SongsService } from './shared/songs.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    songList: Songs[] = [];
    selectedSong: Songs;
    mutedSong: boolean = false;

    volumeValue: number = 30;
    MAX_VOLUME: number = 100;
    lastVolumeSet: number = this.volumeValue / this.MAX_VOLUME;

    title: string = 'Media Player using Angular 2 and Material Design';

    audioPlayer: any = new Audio();

    constructor ( private songService: SongsService ) {

    }

    ngOnInit() {
        this.getSongs();
    }

    getSongs(): void {
        this.songService.getSongs().then(songs => this.songList = songs);
    }

    onSelect(song: Songs): void {
        this.selectedSong = song;

        this.audioPlayer.src = this.selectedSong.url;
        this.audioPlayer.volume = this.lastVolumeSet;
        this.audioPlayer.load();
        this.audioPlayer.play();
    }

    onStopSong(song: Songs): void {
        this.selectedSong = null;
        this.audioPlayer.src = "";
    }

    onVolumeChange(val: number): void {
        this.audioPlayer.volume = val / this.MAX_VOLUME;
        this.lastVolumeSet = val / this.MAX_VOLUME;
        this.mutedSong = (val === 0) ? true : false;
    }

    toggleVolume(): void {
        if ( this.mutedSong ) {
            this.mutedSong = false;
            this.audioPlayer.volume = this.lastVolumeSet;
            this.volumeValue = this.lastVolumeSet * 100;
        } else {
            this.mutedSong = true;
            this.audioPlayer.volume = this.volumeValue = 0;
        }
    }
}
