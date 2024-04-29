import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonIcon, IonInfiniteScroll, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.page.html',
  styleUrls: ['./accomodation.page.scss'],
  standalone: true,
  imports: [FooterComponent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonTabs, IonTabBar, IonTabButton, RouterLink, IonIcon, IonInfiniteScroll]
})
export class AccomodationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
