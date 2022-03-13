import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand/brand.service';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  colorList: Color[];
  brandList: Brand[];
  brandId: number;
  colorId: number;

  constructor(
    private brandService: BrandService,
    private colorService: ColorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getColors();
    this.getBrands();
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colorList = response.data;
    });
  }

  getIdValues() {
    let url;
    if (this.brandId && this.colorId) {
      url = 'cars/color/' + this.colorId + '/brand/' + this.brandId;
    } else if (this.brandId) {
      url = 'cars/brand/' + this.brandId;
    } else if (this.colorId) {
      url = 'cars/color/' + this.colorId;
    } else {
      url = 'cars';
    }

    this.router.navigateByUrl(url);
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brandList = response.data;
    });
  }
}
