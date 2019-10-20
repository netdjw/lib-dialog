# LibDialogComponent

Dialog component for Angular projects to show modal dialogs

## Install

`npm install djw/lib-dialog-component`

## Usage

In your `app.module.ts` (or any module.ts file):

```typescript
import { LibDialogComponent } from 'lib-dialog-component/dist/lib-dialog-component/public-api';
```

then:

```typescript
@NgModule({
  declarations: [
    AppComponent,
    LibDialogComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Dialog types

| Dialog type | Icon                  | Button's class |
| ----------- | --------------------- | -------------- |
| message     | faInfoCircle          | btn-success    |
| error       | faExclamationTriangle | btn-primary    |
| delete      | faExclamationTriangle | btn-danger     |

Icons from Font Awesome 5

Class names based on Bootstrap 4


### Inputs

| Option          | Type    | Description |
| --------------- | ------- | --- |
| `showDialog`    | boolean | Control the dialog open/close status. |
| `title`         | string  | Title of the dialog. |
| `content`       | string  | Contnet of the dialog. |
| `type`          | enum    | See types in Dialog types section. |
| `disableCancel` | boolean | You can disable cancel button. |

### Outputs

| Method | Emit type | Description |
| ------ | --------- | ----------- |
| `dialogChange` | string | The return value can be `ok` or `cancel` depends on user's behavior. If clicks on "OK" or "Delete" button, the result will be `ok`. Otherwise it will be `cancel`. If close the dialog, it means `cancel` too. |

## Examples

### Info dialog

Show a simple message dialog to notify the user about message has been sent.

```html
<lib-dialog-component
  type="message"
  [showDialog]="isOpen"
  [disableCancel]="true"
  title="Message sent"
  content="You message has been sent."
  (dialogChange)="close()"
  ></lib-dialog-component>
  ```

### Error dialog

A simple error dialog to notify the user about unauthorized event happend.

In `my.component.html`:
```html
<lib-dialog-component
  type="error"
  [showDialog]="isOpen"
  [disableCancel]="true"
  title="Unauthorized"
  content="You don't have permission to this page or function."
  (dialogChange)="close()"
  ></lib-dialog-component>
```

In `my.component.ts`:
```typescript
import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit {
  isOpen = false;

  constructor() {}

  ngOnInit() {
  }

  isAuthorized(user: User) {
    if (!user.hasPermission('my-component.write')) {
      this.isOpen = true;
    }
  }

  close() {
    this.isOpen = false;
  }
}
```

### Delete dialog

In this example I show you a way how to handle returning value from dialog.

In `my.component.html`:

```html
<lib-dialog-component
  type="delete"
  [showDialog]="isOpen"
  title="Are you sure?"
  content="You will be delete this information permanently. After deletion it will be lost and will not be recoverable!"
  (dialogChange)="closeOrDelete()"
  ></lib-dialog-component>
```

In `my.component.ts`:
```typescript
import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.model';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit {
  isOpen = false;
  users: User[] = [];
  selectedUser: User;

  constructor(
    userService: UserService,
  ) {
    // we load users data collection from server and push it into `users`
    userService.getAll().subscribe((users: User[]) => {
      this.users.push(...users);
    });
  }

  ngOnInit() {
  }

  closeOrDelete(destroy: string) {
    this.isOpen = false;

    if (destroy === 'cancel') {
      return;
    }

    userService.delete(selectedUser.id).subscribe((result: any) => {
      // remove the user from `users`
    })

  }
}
```
