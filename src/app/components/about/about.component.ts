import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('card', [      
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-100%)'
        }),
        animate('0.6s ease-in-out')
      ]),
      state('void => *', style({ 
        opacity: 1,
        transform: 'translateY(0)'
      })),
    ])
  ]
})
export class AboutComponent implements OnInit {
  activeIndex = 0;
  test = [
    {
      question: 'Czym zajmuje się Tester Oprogramowania?',
      who: 'Łukasz Pietrucha',
      description: 'Specjalista ds. jakości oprogramowania z 10-letnim stażem, akredytowany trener szkoleń ISTQB, współorganizator wydarzenia WrotQA.',
      quote: 'Zanim podjełam decyzję o przekwalifikowani się miałam mnóstwo obaw - przecież nie miałam wykształcenia techniczengo. Materiały, które otrzymałam przed szkoleniem były dla mnie czarną magią.\n\nDopiero podczas szkolenia rozjaśniło mi się w głowie wiele pojęć i uporządkowałam wiedzę. Później (będąć jeszcze przed egzaminem) przeczytałam kilkaktornie sylabuj i egzamin zdałam bez problemów.'
    },
    {
      question: 'Czy praca testera, tyo tylko klikanie?',
      who: 'Marcin Cyboran',
      description: 'Description 2',
      quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis tempore facilis, quos doloribus laudantium eveniet quia asperiores tenetur ipsam, consectetur eligendi atque, ipsa cum incidunt pariatur illo fuga quidem maxime in. Sit fugit ea harum molestias ipsam impedit illum aperiam neque, repellendus autem quis necessitatibus, doloremque, tenetur nisi minus at!'
    },
    {
      question: 'Kto może zostać testerem oprogramowania?',
      who: 'Person 3',
      description: 'Description 3',
      quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis tempore facilis, quos doloribus laudantium eveniet quia asperiores tenetur ipsam, consectetur eligendi atque, ipsa cum incidunt pariatur illo fuga quidem maxime in. Sit fugit ea harum molestias ipsam impedit illum aperiam neque, repellendus autem quis necessitatibus, doloremque, tenetur nisi minus at!'
    },
    {
      question: 'Nie mam doświadczenia. Od czego zacząć?',
      who: 'Person 4',
      description: 'Description 4',
      quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis tempore facilis, quos doloribus laudantium eveniet quia asperiores tenetur ipsam, consectetur eligendi atque, ipsa cum incidunt pariatur illo fuga quidem maxime in. Sit fugit ea harum molestias ipsam impedit illum aperiam neque, repellendus autem quis necessitatibus, doloremque, tenetur nisi minus at!'
    },
    {
      question: 'Nie mam doświadczenia. Od czego zacząć?',
      who: 'Person 4',
      description: 'Description 4',
      quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis tempore facilis, quos doloribus laudantium eveniet quia asperiores tenetur ipsam, consectetur eligendi atque, ipsa cum incidunt pariatur illo fuga quidem maxime in. Sit fugit ea harum molestias ipsam impedit illum aperiam neque, repellendus autem quis necessitatibus, doloremque, tenetur nisi minus at!'
    },
    {
      question: 'Nie mam doświadczenia. Od czego zacząć?',
      who: 'Person 4',
      description: 'Description 4',
      quote: 'Lorem ipsum dolor sit, amet conseasd fasdf asdfasdf asdf asdf asdf asdf asdctetur adipisicing elit.\n\nReiciendis tempore facilis, quos doloribus laudantium eveniet quia asperiores tenetur ipsam, consectetur eligendi atque, ipsa cum incidunt pariatur illo fuga quidem maxime in. Sit fugit ea harum molestias ipsam impedit illum aperiam neque, repellendus autem quis necessitatibus, doloremque, tenetur nisi minus at!'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  onCardChange(cardIindex: number) {
    this.activeIndex = cardIindex;
  }

}
