import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements onInit{
  title = 'Kosher';
  cardTitle = 'My First Card';
  cardSubtitle = 'But wtv';
  cardContent = 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n' +
      '        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n' +
      '        bred for hunting';

  ngOnInit():void {
    this.title = 'WOW';
  }
}
