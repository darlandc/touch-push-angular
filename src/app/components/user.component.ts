import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';

import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit, OnDestroy {
  userIds = Array.from({ length: 10 }, (_, i) => i + 1);
  userControl = new FormControl();
  readonly user$ = this.userService.user$;

  private subSink = new Subscription();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.subSink.add(
      this.userControl.valueChanges
        .subscribe(v => this.loadUser(v))
    );
  }

  ngOnDestroy() {
    this.subSink.unsubscribe();
  }

  private loadUser(id: string) {
    this.userService.loadUser(id);
  }
}
