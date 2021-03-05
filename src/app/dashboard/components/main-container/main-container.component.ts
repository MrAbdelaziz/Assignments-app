import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../../_services/token-storage.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
  }

}
