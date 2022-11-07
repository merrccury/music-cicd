import { Injectable } from '@nestjs/common';
import * as axios from 'axios';
import { EntityType } from '../enums';
import { ITunesResponse } from '../interfaces';

@Injectable()
export class ITunesApi {
  constructor() {
    this.api = 'https://itunes.apple.com';
  }

  private readonly api: string;

  public async searchSong(term: string): Promise<ITunesResponse> {
    // @ts-ignore
    const result: { data: ITunesResponse } = await axios.get<ITunesResponse>(
      `${this.api}/search`,
      {
        params: {
          term,
          entity: EntityType.Song,
        },
      },
    );
    return result.data;
  }
}
