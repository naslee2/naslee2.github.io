import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit() {
    $(document).ready(function() {
      $(window).scroll(function(){
        if($(document).scrollTop() > 300) {
          $('.navbar').addClass('solid');
          console.log('cat');
        }
        else{
          $('.navbar').removeClass('solid');
        }
      });
    });
  }
}
