import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as $ from 'jquery';

@Component({
  selector: 'app-admingame',
  templateUrl: './admingame.component.html',
  styleUrls: ['./admingame.component.css']
})
export class AdmingameComponent implements OnInit {

  private delayChangeInMs: number = 10000;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.updateBackgroundImage();
  }

  updateBackgroundImage(): void {
    const images: string[] = ['babylone', 'alexandrie', 'artemis', 'gizeh', 'halicarnasse', 'rhodes', 'zeus'];
    let index: number = 0;

    $("#divAdmin").css("background-image", "url('../../assets/img/empty_cities/" + images[index] + ".jpg')");

    setInterval(function() {
      index++;
      if (index == images.length) index = 0;

      $("#divAdmin").css("background-image", "url('../../assets/img/empty_cities/" + images[index] + ".jpg')");
    }, this.delayChangeInMs);
  }

  createGame(): void {
    let link = ['/game'];
    this.router.navigate(link);
  }
}
