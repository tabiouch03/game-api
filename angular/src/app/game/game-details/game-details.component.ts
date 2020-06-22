import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  currentGame = null;


  constructor(private gameService: GameService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getGameById(this.route.snapshot.paramMap.get('id'));
  }

  getGameById(id) {
    this.gameService.getGameById(id).subscribe(game => {
      this.currentGame = game;
      console.log(game)
    }, error => {
      console.log(error);

    })
  }

}
