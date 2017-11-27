import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

    console.log(input);
    return input;
  }
}
