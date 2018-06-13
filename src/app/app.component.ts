import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  monsterName: 'superman';
  monsterPower: number;

  hero: any = {

    name: '',
    power: null


  };




  monsters: any[] = [
    {
      monsterName: 'superman',
      monsterPower: Math.floor(Math.random() * 100)
     },
     { monsterName: 'supermonster',
      monsterPower:  Math.floor(Math.random() * 100)
     }
    ];

    monsterSelected;

    ngOnInit() {
      this.pickMonster();
    }

    pickMonster() {
      const index = Math.floor(Math.random() * this.monsters.length);
      this.monsterSelected = this.monsters[index];
    }
generatePower() {
  this.monsterSelected.monsterPower = Math.floor(Math.random() * 101);
  // console.log(this.monsterSelected.monsterPower);
}
heroPower() {
  this.hero.power = Math.floor(Math.random() * 100);

}
}
