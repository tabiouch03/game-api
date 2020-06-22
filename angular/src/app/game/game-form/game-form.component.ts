import { Component, OnInit } from '@angular/core';
import { Game } from '../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  game: Game = {
    name: '',
    genre: '',
    cover: '',
    prix: 0,
    description: '',
    description2: ''
  }

  isSubmit = false;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  saveGame() {
    const data = {
      name: this.game.name,
      genre: this.game.genre,
      cover: this.game.cover,
      prix: this.game.prix,
      description: this.game.description,
      description2: this.game.description2
    }
    this.gameService.createGame(data).subscribe(result => {
      this.isSubmit = true;
    }, error => {
      console.log(error);
    });
  }

  newGame() {
    this.isSubmit = false;
    this.game = {
      name: '',
      genre: '',
      cover: '',
      prix: 0,
      description: '',
      description2: ''
    }
  }

}
