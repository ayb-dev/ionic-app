import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonIcon, IonInfiniteScroll, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonLabel, IonDatetime, IonDatetimeButton, IonModal, IonSelect, IonSelectOption} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.page.html',
  styleUrls: ['./transport.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonTabs, IonTabBar, IonTabButton, RouterLink, IonIcon, IonInfiniteScroll, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonLabel, IonDatetime, IonDatetimeButton, IonModal, IonSelect, IonSelectOption]
})
export class TransportPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
