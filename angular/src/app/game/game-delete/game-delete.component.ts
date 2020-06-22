import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-delete',
  templateUrl: './game-delete.component.html',
  styleUrls: ['./game-delete.component.css']
})
export class GameDeleteComponent implements OnInit {

  constructor(private gameService: GameService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.deleteGame(this.route.snapshot.paramMap.get('id'));
  }

  deleteGame(id){
    this.gameService.deleteGame(id).subscribe(game => {
      console.log('Jeu supprimer avec succés !')
    })
  }

}
