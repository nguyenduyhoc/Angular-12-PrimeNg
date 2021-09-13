import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Note } from 'src/models/notes.models';
import { NotesService } from 'src/services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  // providers: [ConfirmationService, MessageService],
})
export class NotesComponent implements OnInit {
  public items: MenuItem[] = [];
  public notes: Note[] | undefined;
  public selectedNote!: Note | undefined;
  public newNote: Note | undefined;
  private authorID: number = 1;

  constructor(
    private noteService: NotesService,
    private messageService: MessageService
  ) {}

  editNote(note: any) {
    this.selectedNote = note;
  }
  getSelectedClass(note: Note): string {
    if (!this.selectedNote) {
      return '';
    }
    return this.selectedNote.id === note.id ? 'selected' : 'non-selected';
  }
  addNote(): void {
    this.newNote = {
      id: 0,
      title: '',
      note: '',
      author: 'Duy Hoc',
      authorID: this.authorID,
    };
  }
  cancelAddNote(): void {
    this.newNote = undefined;
    this.messageService.add({severity:'error', summary:'Thông báo', detail:'Không thành công'});
  }

  saveNote(): void {
    if (!this.newNote) {
      this.messageService.add({severity:'error', summary:'Thông báo', detail:'Không Thành công'});
      return undefined;
    }
    this.noteService.postNotes(this.newNote).subscribe((note) => {
      this.messageService.add({severity:'success', summary:'Thông báo', detail:'Thành công'});
      this.notes?.push(note);
      this.newNote = undefined;
      console.log(note);
    });
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'File',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [{ label: 'Project' }, { label: 'Other' }],
          },
          { label: 'Open' },
          { label: 'Quit' },
        ],
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
        ],
      },
    ];
    this.noteService.getNotes().subscribe((data) => {
      this.notes = data;
    });
  }
}
