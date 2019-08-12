import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'circle-progress',
  template: `
    <div class="progress" [style.width.px]="size" [style.height.px]="size">
      <div class="circle" [class.red]="_percent <= 70 && _percent > 0" [class.yellow]="_percent > 70 && _percent <= 90" [class.green]="_percent > 90" [class.zero] ="_percent == 0">
        <div class="mask left"
          [ngStyle]="{'clip': 'rect(0px, '+size+'px, '+size+'px, '+size/2+'px)'}">
          <div class="fill"
            [style.transform]="'rotate('+rotate+'deg)'"
            [ngStyle]="{'clip': 'rect(0px, '+size/2+'px, '+size+'px, 0px)'}"></div>
          <div class="fill fix"
            [style.transform]="'rotate('+(rotate * 2)+'deg)'"
            [ngStyle]="{'clip': 'rect(0px, '+size/2+'px, '+size+'px, 0px)'}"></div>
        </div>
        <div class="mask right"
          [style.transform]="'rotate('+rotate+'deg)'"
          [ngStyle]="{'clip': 'rect(0px, '+size+'px, '+size+'px, '+size/2+'px)'}">
          <div class="fill"
            [style.transform]="'rotate('+rotate+'deg)'"
            [ngStyle]="{'clip': 'rect(0px, '+size/2+'px, '+size+'px, 0px)'}"></div>
        </div>
      </div>
      <div class="center" [style.width.%]="center" [style.height.%]="center">
        <span [style.font-size.px]="font">{{_percent}}%</span>
      </div>
    </div>
  `,
  styleUrls: ['./pure-circle-progress.component.scss']
})
export class PureCircleProgressComponent implements OnInit {
  _percent: number = 0;
  rotate: number = 0;

  @Input() size: number = 140;
  @Input() center: number = 65;
  @Input() font: number = 20;
  @Input() set percent(val: number) {
    if(val < 0) val = 0;
    else if(val > 100) val = 100;

    this._percent = val;
    this.onChangePercent();
  }

  constructor() { }

  ngOnInit() {
  }

  onChangePercent() {
    const point = 180 / 100;
    this.rotate = this._percent * point;
  }
}
