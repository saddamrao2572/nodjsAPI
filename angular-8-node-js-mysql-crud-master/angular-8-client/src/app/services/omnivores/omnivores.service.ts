import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://api.omnivore.io/1.0/locations/i57z4qMT?limit=2&api_key=fa1541435e6c4f82a1a6dccd86bc43a2';
const menueUrl = 'https://api.omnivore.io/1.0/locations/i57z4qMT/menu/categories?api_key=fa1541435e6c4f82a1a6dccd86bc43a2';
const ticketsUrl = 'https://api.omnivore.io/1.0/locations/i57z4qMT/tickets?api_key=fa1541435e6c4f82a1a6dccd86bc43a2';

@Injectable({
  providedIn: 'root'
})
export class OmnivoresService {

  constructor(private http: HttpClient) { }

  omni() {
    return this.http.get(baseUrl);
  }
 menu() {
    return this.http.get(menueUrl);
  }
  
  tickets() {
    return this.http.get(ticketsUrl);
  }
  
  

}
