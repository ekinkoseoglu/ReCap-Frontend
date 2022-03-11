import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  currentColor: Color;
  searchString: string;
  constructor(private _colorService: ColorService) {}

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this._colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      console.log(this.colors);
    });
  }

  setCurrentColor(color: Color) {
    this.currentColor = color;
  }

  getColorListClass(color: Color): string {
    if (this.currentColor == color) {
      return 'list-group-item list-group-item-action active';
    } else {
      return 'list-group-item list-group-item-action';
    }
  }
}
