import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges,
} from '@angular/core';
import { RoomList } from '../rooms';
@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit, OnChanges {
  ngOnInit(): void {
    console.log('rooms', this.rooms);
  }

  ngOnChanges(): void {
    console.log('rooms', this.rooms);
  }

  @Input() rooms: RoomList[] = [];

  @Input() title: string = '';

  @Output() selectedRoom = new EventEmitter<RoomList>();

  selectRoom(room: RoomList): void {
    this.selectedRoom.emit(room);
  }
}
