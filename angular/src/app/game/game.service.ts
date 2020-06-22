import { Injectable } from '@angular/core';
import { Game } from './game.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  // API URL
  private REST_API_SERVER = 'http://localhost:3000/api/game/';

  constructor(private http: HttpClient) { }

  // Get All Games
  getGames() {
    return this.http.get<Game[]>(this.REST_API_SERVER);
  }
  // Get Game By ID
  getGameById(id: string) {
    return this.http.get<Game>(this.REST_API_SERVER + id);
  }
  // Create Game
  createGame(data: Game) {
    return this.http.post<Game>(this.REST_API_SERVER, data)
  }
  // Delete Game
  deleteGame(id: string) {
    return this.http.delete<Game>(this.REST_API_SERVER + id);
  }
}
