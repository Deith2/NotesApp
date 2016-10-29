import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  public notes = [];

  constructor() { }

  ngOnInit() {
    this.notes = [
      {
        subject: "Test",
        body: "Test message"
      },
      {
        subject: "Second test",
        body: "Second test message"
      }
    ]
  }

}
