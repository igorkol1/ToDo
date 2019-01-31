import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'util';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

message = 'Welcome message'
name 
welcomeMessageFromService:string

  constructor(
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.message = 'Welcome '+this.route.snapshot.params['name']
    this.name = this.route.snapshot.params['name']
    console.log(this.message)
  }
}
