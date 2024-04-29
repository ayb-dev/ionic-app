import { Component, OnInit, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonMenu, IonButtons, IonMenuButton, IonButton, IonItem, IonLabel, IonSelect, IonSelectOption, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonSearchbar, IonRefresher, IonRow, IonCol, IonInfiniteScroll, IonPopover, IonInput, IonCheckbox, IonDatetimeButton, IonDatetime, IonModal} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [FooterComponent, IonHeader, IonToolbar, IonTitle, IonContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonMenu, IonButtons, IonMenuButton, IonButton, IonItem, IonLabel, IonSelect, IonSelectOption, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonSearchbar, IonRefresher, RouterLink, IonRow, IonCol, IonInfiniteScroll, IonPopover, IonInput, IonCheckbox, IonDatetimeButton, IonModal, IonDatetime]
})
export class MainPage implements OnInit{

  constructor() { }

  ngOnInit() {
  }

}
