import { ISongItem } from './ISongItem';

export interface ITunesResponse {
  resultCount: number;
  results: Array<ISongItem>;
}
