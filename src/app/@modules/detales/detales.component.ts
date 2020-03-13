import {Component, OnInit} from '@angular/core';
import {NbpService} from "../../@core/services/nbp.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detales',
  templateUrl: './detales.component.html',
  styleUrls: ['./detales.component.css']
})
export class DetalesComponent implements OnInit {

  code: string = null;
  rates: any = null;

  constructor(private nbpservice: NbpService, private activatedRoute: ActivatedRoute) {
    console.log(this.code);
    this.activatedRoute.params.subscribe(data => {
      console.log(data);
      this.code = data.code;
    });
  }

  ngOnInit(): void {
    console.log(this.code);
    this.rateServices();
  }

  rateServices(): void {
    this.nbpservice.getByCode(this.code).subscribe((data) => {
      this.rates = data;
      console.log(data);
      console.log(this.rates.rates[0].mid);
    });

  }
}
