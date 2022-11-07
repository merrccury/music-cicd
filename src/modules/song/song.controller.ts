import { Controller, Get, Query } from '@nestjs/common';
import { SongService } from './song.service';

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get()
  public async findSong(@Query() query): Promise<any> {
    const { term } = query;
    return this.songService.findSong(term);
  }
}
