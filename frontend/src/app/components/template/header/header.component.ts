import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerServices: HeaderService) { }

  ngOnInit(): void {
  }
get title(): String{
return this.headerServices.headerData.title

}
get icon(): String{
  return this.headerServices.headerData.icon
}
get routeUrl(): String{
  return this.headerServices.headerData.routeUrl
}
}
