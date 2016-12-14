import { Injectable } from '@angular/core';
import { Songs } from './songs';

@Injectable()
export class SongsService {
    constructor() { }

    getSongs(): Promise<Songs[]>{
        return Promise.resolve(SONGDATA)
    }
}

const SONGDATA: Songs[] = [
    {
        title: "National Anthem: Indonesia", url: "http://www.noiseaddicts.com/samples_1w72b820/4202.mp3", year: 1945, description: "free-samples-mp3/?id=4202"
    },
    { title: "The firing squad", url: 'http://sampleswap.org/mp3/artist/5101/Peppy--The-Firing-Squad_YMXB-160.mp3', year: 1998, description: 'A song by Peppy' },
    { title: "Tight rope", url: 'http://sampleswap.org/mp3/artist/36776/EffelDur_TightRope-160.mp3', year: 1998, description: 'A song by EffelDur' },
    {
        title: "Dance of the Sugar Plum Fairy", url: "http://www.dl-sounds.com/wp-content/uploads/edd/2016/12/Dance-of-the-Sugar-Plum-Fairy-preview.mp3", year: 1234, description: "a song by Pjotr Iljitsj Tsjaikovski"
    },
    {
        title: "Battle Hymn of the Republic", url: "http://www.noiseaddicts.com/samples_1w72b820/2540.mp3", year: 1235, description: "free-samples-mp3/?id=2540"
    },
    {    title: "Hugo 'Droopy' Contini", url: "https://allthingsaudio.wikispaces.com/file/view/Hugo_Droopy_Contini_-_03_-_Sandu.mp3/139218831/Hugo_Droopy_Contini_-_03_-_Sandu.mp3", year: 1986, description: "a song by Hugo 'Droopy' Contini"
    }
]