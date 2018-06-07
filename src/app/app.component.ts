import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  monsterName = 'superman';
  monsterPower: 0;

  monsters: any[] = [{
      monsterName: 'superman',
      monserPower: null,
     },
     { monsterName: 'super',
      montserPower:  null,
     }
    ];

    monsterSelected;
    ngOnInit() {
      this.pickMonster();
    }

    pickMonster() {
      const index = Math.floor(Math.random() * this.monsters.length);
      this.monsterSelected = this.monsterPower;
    }
generatePower() {
  this.monsterSelected.monsterPower = Math.floor(Math.random() * 101);
  console.log(this.monsterSelected.monsterPower);
}


}
