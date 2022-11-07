import { Injectable } from '@nestjs/common';
import { ITunesApi } from '../../services';

@Injectable()
export class SongService {
  constructor(private readonly itunesApi: ITunesApi) {}

  public async findSong(term: string): Promise<any> {
    const apiResult = await this.itunesApi.searchSong(term);
    return apiResult.results.map((item) => {
      return {
        cover: item.artworkUrl100.replace('100x100', '250x250'),
        song: item.previewUrl,
        songName: item.trackName,
        artistName: item.artistName,
        collectionName: item.collectionName,
      };
    });
  }
}
