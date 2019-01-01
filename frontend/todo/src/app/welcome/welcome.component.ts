import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
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
    private route:ActivatedRoute,
    private service:WelcomeDataService) { }

  ngOnInit() {
    this.message = 'Welcome '+this.route.snapshot.params['name']
    this.name = this.route.snapshot.params['name']
    console.log(this.message)
  }

  getWelcomeMessage(){
    console.log(this.service.executeHelloWordBeanService())
    this.service.executeHelloWordBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    )
  }

  handleSuccessfulResponse(response){
    console.log(response.message)
    this.welcomeMessageFromService=response.message
  }

  handleErrorResponse(error){
    this.welcomeMessageFromService = 'Some error has occuired'
    console.log(error.error.message)
  }

}
