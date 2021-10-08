import { Component, OnInit } from '@angular/core';
import { OmnivoresService } from 'src/app/services/omnivores/omnivores.service';
@Component({
  selector: 'app-omnivores',
  templateUrl: './omnivores.component.html',
  styleUrls: ['./omnivores.component.css']
})
export class OmnivoresComponent implements OnInit {
  omni:any;
   menuee: any;
   ticketss: any;
  currentLocations = null;
  currentIndex = -1;
  id = '';
  title = '';
  addOn = null;
  locationID = 'i57z4qMT';
  comboBox = null;
  description = '';
  submitted = false;

  constructor(private omniService: OmnivoresService) { }

  ngOnInit() {
	    this.conectOmnivores();
  }
  counter(i: number) {
    return new Array(i);
	}

  conectOmnivores() {
   
    this.omniService.omni()
      .subscribe(
        data => {
          this.omni = data;
          this.menuee = data;
          this.ticketss = data;
		   this.getMenu();
		   this.getTickets();
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  getMenu() {
   
    this.omniService.menu()
      .subscribe(
        data => {
          
		   
		 this.menuee = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
   getTickets() {
   
    this.omniService.tickets()
      .subscribe(
        data => {
          
          this.ticketss = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  
  refreshList() {
    this.conectOmnivores();
    this.getMenu();
    this.getTickets();
    this.currentLocations = null;
    this.currentIndex = -1;
  }

}
