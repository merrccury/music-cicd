import { Module } from '@nestjs/common';
import { SongModule } from './modules';
import { AppController } from './app.controller';

@Module({
  imports: [SongModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
