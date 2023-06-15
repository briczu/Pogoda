import { Component, OnInit } from '@angular/core';
import { PogodaService } from '../serwisy/pogoda.service';

@Component({
  selector: 'app-pogoda',
  templateUrl: './pogoda.page.html',
  styleUrls: ['./pogoda.page.scss'],
})
export class PogodaPage implements OnInit {
  pogoda: any;

  constructor(private pogodaService: PogodaService) { }

  ngOnInit() {
    this.pogodaService.pobierzDane('Poland')
    .subscribe(data => {
      this.pogoda = data;
      console.log(this.pogoda);
    });
  }
}