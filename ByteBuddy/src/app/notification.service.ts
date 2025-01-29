import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root', // Makes this service available application-wide
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  // Method for success notifications
  showSuccess(message: string, duration: number = 3000): void {
    this.snackBar.open(message, '❌', {
      duration,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: 'success-snackbar',
    });
  }

  // Method for error notifications
  showError(message: string, duration: number = 3000): void {
    this.snackBar.open(message, '❌', {
      duration,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['error-snackbar'], // Custom class
    });
  }

  // Method for info notifications
  showInfo(message: string, duration: number = 3000): void {
    this.snackBar.open(message, '❌', {
      duration,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['info-snackbar'], // Custom class
    });
  }

  // Method for warning notifications
  showWarning(message: string, duration: number = 3000): void {
    this.snackBar.open(message, '❌', {
      duration,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['warning-snackbar'], // Custom class
    });
  }
}
// Example usage
// constructor(private notificationService: NotificationService) {}

// showSuccess() {
//   this.notificationService.showSuccess('Operation completed successfully!');
// }

// showError() {
//   this.notificationService.showError('An error occurred.');
// }

// showInfo() {
//   this.notificationService.showInfo('Here is some information.');
// }

// showWarning() {
//   this.notificationService.showWarning('This is a warning!');
// }