import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  price = "";
  youtubelink = "";
  youtubeInfo = "";
  hobbies = ""
  aboutInfo = ""
  showInformation(index: number){      
    this.price = ""
    this.youtubeInfo = ""
    this.youtubelink = ""
    this.aboutInfo = ""
    this.hobbies = ""    
    switch(index){
      case 0: this.aboutInfo = "I am me and that's all you need to know about me!"; break;
      case 1: this.hobbies = "My hobbies are playing games and habing fun!"; break;
      case 2: this.youtubelink = "SchaffrillasProductions"; break;
      case 3: this.youtubeInfo = "It is a movie review channel"; break;
      case 4: this.price = "I will cost you the measily 200$"; break;
      default: break;
    }
  }
}
