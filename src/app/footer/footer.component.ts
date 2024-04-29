import { Component, OnInit } from '@angular/core';
import { IonHeader, IonFooter, IonToolbar, IonTitle, IonContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonMenu, IonButtons, IonMenuButton, IonButton, IonItem, IonLabel, IonSelect, IonSelectOption, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonSearchbar, IonRefresher, IonRow, IonCol, IonInfiniteScroll, IonPopover, IonInput, IonCheckbox, IonDatetimeButton, IonDatetime, IonModal} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [RouterLink, FooterComponent, IonHeader, IonFooter, IonToolbar, IonTitle, IonContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonMenu, IonButtons, IonMenuButton, IonButton, IonItem, IonLabel, IonSelect, IonSelectOption, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonSearchbar, IonRefresher, RouterLink, IonRow, IonCol, IonInfiniteScroll, IonPopover, IonInput, IonCheckbox, IonDatetimeButton, IonModal, IonDatetime]

})
export class FooterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
