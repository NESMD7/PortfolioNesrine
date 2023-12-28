import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutMeComponent {
  title = 'personal-blog';

  selectedWord: string = "";

  displayWord(word: string): void {
    this.selectedWord = word;
  }
}
