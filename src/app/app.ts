// src/app/app.ts (or src/app/app.component.ts)
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Add CommonModule if not already present and needed for directives

// Import your standalone library component directly
import { MyButton } from 'my-component-lib';

@Component({
  selector: 'app-root',
  standalone: true, // Ensure it's marked as standalone
  imports: [
    RouterOutlet,
    CommonModule, // Add CommonModule if not already present and needed for directives like *ngIf
    MyButton // Import your standalone library component here
  ],
  templateUrl: './app.html', // Updated to match your provided template file
  styleUrl: './app.scss' // Updated to match your provided stylesheet file
})
export class App { // Updated class name to match your provided class
  protected readonly title = signal('my-angular-app');
  buttonClickedMessage: string = '';


}
