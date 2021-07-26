import { Injectable } from "@angular/core";
import { LogService } from "./log.service";

@Injectable({
  providedIn: 'root'
})
export class AppCounterService {
  counter = 0;

  constructor(public logService: LogService) {

  }
  
  increase() {
    this.logService.log('inc c')
    this.counter++;
  }

  decrease() {
    this.logService.log('dec c')
    this.counter--;
  }
}