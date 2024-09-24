import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-profile-alert',
  templateUrl: './user-profile-alert.component.html',
  styleUrls: ['./user-profile-alert.component.css']
})
export class UserProfileAlertComponent {
  user: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Get the current user from the UserService
    this.user = this.userService.getUser();
  }
}
