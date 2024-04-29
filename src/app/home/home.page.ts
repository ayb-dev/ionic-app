import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonMenu, IonButtons, IonMenuButton, IonButton, IonImg, IonItem, IonLabel, IonSelect, IonSelectOption, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonSearchbar, IonRefresher, IonRow, IonCol, IonInput, IonInfiniteScroll, IonInfiniteScrollContent, IonCheckbox, IonDatetime, IonDatetimeButton, IonModal} from '@ionic/angular/standalone';
import { SearchbarComponent } from '../searchbar/searchbar.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [SearchbarComponent, IonHeader, IonToolbar, IonTitle, IonContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonMenu, IonButtons, IonMenuButton, IonButton, IonItem, IonLabel, IonSelect, IonSelectOption, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonSearchbar, IonRefresher, RouterLink, IonRow, IonCol, IonInput, IonInfiniteScroll, IonInfiniteScrollContent, IonCheckbox, IonDatetime, IonDatetimeButton, IonModal]
})
export class HomePage{
  constructor() {}

}

