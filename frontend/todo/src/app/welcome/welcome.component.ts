import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

message = 'Welcome message'

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.message = 'Welcome '+this.route.snapshot.params['name']
    console.log(this.message)
  }

}
