import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor() { }

  //checks when window is resized or scrolled. If one or the other happens, it will replace CSS as needed.
  navCheck(){
    $(document).ready(function() {
      $(window).on("load resize scroll", function(e){
        if($(document).width() < 800 || $(document).scrollTop() > 450){ 
            $('.navbar').addClass('solid');
            $('.nav-link').addClass('black');
            $('.navbar-brand').addClass('black');
        } 
        else {
            $('.navbar').removeClass('solid');
            $('.nav-link').removeClass('black');
            $('.navbar-brand').removeClass('black');
        }
    });
    })
  }

  //when link is clicked, it will autoscroll to target div specified inside link.
  navTarget(){
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top-59
          }, 300);
      }
    });
  }

  

  ngOnInit() {
    this.navCheck();
    this.navTarget();
  }
}
