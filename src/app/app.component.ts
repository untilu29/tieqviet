import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public subscription: Subscription;

  title = 'app';
  maps = [
    ['kh', 'x'],
    ['c(?!h)', 'k'],
    ['q', 'k'],
    ['tr', 'c'],
    ['ch', 'c'],
    ['d', 'z'],
    ['gi', 'z'],
    ['r', 'z'],
    ['đ', 'd'],
    ['ph', 'f'],
    ['ngh?', 'q'],
    ['gh', 'g'],
    ['th', 'w'],
    ['nh', 'n\'']
  ];

  inputs ='';
  values = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  };

  ngOnInit(){
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this.inputs = typeof params['id']!=='undefined'?params['id']:'';
      this.values = this.onProcessing(this.inputs);
    });

  }

  capitalize = string => `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
  convert = (input, map) => {
    return input
      .replace(new RegExp(map[0], 'g'), map[1])
      .replace(new RegExp(this.capitalize(map[0]), 'g'), this.capitalize(map[1]));
  }

  onProcessing(input) {
    if (typeof input !== 'string') {
      throw new TypeError(`Expected a string, got ${typeof input}`);
    }
    this.maps.forEach(map => {
      input = this.convert(input, map);
    });

    return input;
  }

  onKey(event: any) { // without type info
    this.values = this.onProcessing(event.target.value);
    history.pushState(null,null,'/#/'+encodeURI(event.target.value));
  }
}
