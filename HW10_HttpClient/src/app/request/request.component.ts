import { Component } from '@angular/core';
import { HttpRequestService } from "../http-request.service";
import { HttpClientModule} from "@angular/common/http";
import { User } from '../user';
import { Album } from '../album';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [HttpClientModule, NgFor],
  templateUrl: './request.component.html',
  styleUrl: './request.component.css',
  providers: [HttpRequestService]
})

export class RequestComponent
{
  users: User[] = [];
  albums: Album[] = [];
  constructor(private HttpRequestService: HttpRequestService)
  { }

  ngOnInit()
  {
    this.HttpRequestService.getData().subscribe({next: (data: any) => this.users = data["userList"]});
    this.HttpRequestService.getAlbums().subscribe({
      next: (data: Album[]) => this.albums = data
    });
  }
}