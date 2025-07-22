// projects/my-component-library/src/lib/my-button/my-button.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Needed for ngIf, ngFor, etc. if used in template
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
@Component({
  selector: 'lib-my-button', // Prefix 'lib-' is common for library components
  standalone: true, // This component is standalone
  imports: [CommonModule,MatIconModule], // Import CommonModule for directives like ngIf, ngFor if needed
  templateUrl: './my-button.html', // Updated to match CLI output
  styleUrl: './my-button.css' // Updated to match CLI output
})
export class MyButton { // Updated class name to match CLI output
  @Input() backgroundColor: string = 'orange'; // Default blue
  @Output() onClick = new EventEmitter<void>();

  constructor() { }
}
