import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

message = 'Welcome message'

  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService) { }

  ngOnInit() {
    this.message = 'Welcome '+this.route.snapshot.params['name']
    console.log(this.message)
  }

  getWelcomeMessage(){
    console.log(this.service.executeHelloWordBeanService())
    this.service.executeHelloWordBeanService().subscribe()
  }

}
