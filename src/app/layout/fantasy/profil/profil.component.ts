import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { NgModel } from '@angular/forms';
import { DataService } from '../../../_services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  constructor(public router: Router, private dataService: DataService) { }

  saison = 9;
  ligue = "JCS";
  pseudo = "";
  id = 0;
  session = 0;
  roster = [];
  listeItem = [];
  vueDetail = false;
  selectedItem: any;

  urlServer = '../../../../../assets/images/images_joueur/';

  listeRarete = {
    1: 'Normal',
    2: 'Rare',
    3: 'Épique',
    4: 'Légendaire'
  }

  ngOnInit() {

    this.pseudo = localStorage.getItem("pseudoP");
    this.id = parseInt(localStorage.getItem("idP"));
    this.session = parseInt(localStorage.getItem("sessionP"));
    this.ligue = localStorage.getItem("ligueP");

    this.dataService.rosterJoueur(this.session, this.saison, this.ligue, this.id).then(data => {
      this.roster = data;
    });

    this.dataService.deckJoueur(this.id, this.ligue, this.saison, 3).then(data => {
      this.listeItem = data;  
    });
   
  }

  gotoDetails(item)
  {
    this.vueDetail = true;
    this.selectedItem = item;    
  }

  goBack()
  {
    this.vueDetail = false;
  }

}
