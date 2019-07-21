import { Component, OnInit } from '@angular/core';
import { About } from './../../interfaces/about-interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  activeIndex = 0;
  test = [
    {
      question: 'Czym zajmuje się Tester Oprogramowania?',
      who: 'Marcin Cyboran',
      description: 'Description 1',
      // tslint:disable-next-line: max-line-length
      quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis tempore facilis, quos doloribus laudantium eveniet quia asperiores tenetur ipsam, consectetur eligendi atque, ipsa cum incidunt pariatur illo fuga quidem maxime in. Sit fugit ea harum molestias ipsam impedit illum aperiam neque, repellendus autem quis necessitatibus, doloremque, tenetur nisi minus at!'
    },
    {
      question: 'Czy praca testera, tyo tylko klikanie?',
      who: 'Łukasz Pietrucha',
      description: 'Description 2',
      // tslint:disable-next-line: max-line-length
      quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis tempore facilis, quos doloribus laudantium eveniet quia asperiores tenetur ipsam, consectetur eligendi atque, ipsa cum incidunt pariatur illo fuga quidem maxime in. Sit fugit ea harum molestias ipsam impedit illum aperiam neque, repellendus autem quis necessitatibus, doloremque, tenetur nisi minus at!'
    },
    {
      question: 'Kto może zostać testerem oprogramowania?',
      who: 'Person 3',
      description: 'Description 3',
      // tslint:disable-next-line: max-line-length
      quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis tempore facilis, quos doloribus laudantium eveniet quia asperiores tenetur ipsam, consectetur eligendi atque, ipsa cum incidunt pariatur illo fuga quidem maxime in. Sit fugit ea harum molestias ipsam impedit illum aperiam neque, repellendus autem quis necessitatibus, doloremque, tenetur nisi minus at!'
    },
    {
      question: 'Nie mam doświadczenia. Od czego zacząć?',
      who: 'Person 4',
      description: 'Description 4',
      // tslint:disable-next-line: max-line-length
      quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis tempore facilis, quos doloribus laudantium eveniet quia asperiores tenetur ipsam, consectetur eligendi atque, ipsa cum incidunt pariatur illo fuga quidem maxime in. Sit fugit ea harum molestias ipsam impedit illum aperiam neque, repellendus autem quis necessitatibus, doloremque, tenetur nisi minus at!'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  onCardChange(index: number) {
    console.log(index);
    this.activeIndex = index;
  }

}
