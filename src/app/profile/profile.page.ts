import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonHeader, IonIcon, IonInfiniteScroll, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPopover, IonRefresher, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar, IonInput } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonTabs, IonTabBar, IonTabButton, IonBackButton, IonIcon, IonMenu, IonButtons, IonMenuButton, IonButton, IonItem, IonLabel, IonSelect, IonSelectOption, IonIcon, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonSearchbar, IonRefresher, RouterLink, IonInfiniteScroll, IonPopover, IonRow, IonCol, IonInput]
})
export class ProfilePage implements OnInit{

  constructor() { }

  ngOnInit() {
  }
}
