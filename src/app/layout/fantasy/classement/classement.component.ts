import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { NgModel } from '@angular/forms';
import { DataService } from '../../../_services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.scss']
})
export class ClassementComponent implements OnInit {

  constructor(public router: Router, private dataService: DataService) { }

  saison = 9;
  ligue = "JCS";
  vueRoster = false;
  session = 1;

  listeSession = [];
  listeTotale = [];
  listeParSession = [];

  ngOnInit() {
    this.dataService.getAllSession(this.ligue, this.saison).then(data => {
      this.listeSession = data;

      this.session = data[0].id_session;

      this.chargerTableauSession();

      this.chargerTableauScoreTotal();
    });
  }

  chargerTableauSession()
  {
    this.dataService.getAllScore(this.session, this.ligue, this.saison).then(data => {
      
      this.listeParSession = data;

      console.log(data);
    });
  }

  chargerTableauScoreTotal()
  {
    this.dataService.getAllScoreTotal(this.ligue, this.saison).then(data => {
      this.listeTotale = data;
    });
  }

  parametreConsultation(item){
    localStorage.setItem("pseudoP",item.uti_login);
    localStorage.setItem("idP",item.uti_id);
    localStorage.setItem("sessionP",this.session.toString());
    localStorage.setItem("ligueP",this.ligue);
  }

  selectionChange($event)
  {  
    this.ngOnInit();
  }

  selectionSemaine($event)
  { 
    this.chargerTableauSession();

    this.chargerTableauScoreTotal();   
  }

}
