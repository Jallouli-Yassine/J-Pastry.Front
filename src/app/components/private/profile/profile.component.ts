import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Get the current user from the UserService
    this.user = this.userService.getUser();
  }
}
