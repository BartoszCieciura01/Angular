import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../@models/ProductModel';
import {NbpService} from '../../@core/services/nbp.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  list: Array<ProductModel> = []
  rates: any = null;
  // tslint:disable-next-line:variable-name
  _state = true;

  constructor(private nbpservice: NbpService, private router: Router) {
  }

  ngOnInit(): void {
    const k: ProductModel = {
      name: 'Komputer',
      cena: 1200,
      opis: 'opis komputera'
    }
    this.list.push(k);

    const t: ProductModel = {
      name: 'Telefon',
      cena: 1000,
      opis: 'opis telefonu'
    }
    this.list.push(t);

    const m: ProductModel = {
      name: 'Myszka',
      cena: 199,
      opis: 'opis myszki'
    }
    this.list.push(m);
    this.rateServices();
  }

  rateServices(): void {
    this.nbpservice.get().subscribe((data) => {
      this.rates = data[0];
    });

  }

  onClickDetails(item): void {
    console.log('odebralem');
    console.log(item);
    this.router.navigate(['details', item.code]);
  }

}
