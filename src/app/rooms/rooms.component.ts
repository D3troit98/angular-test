import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air conditioned',
        price: 500,
        photos: 'http://www.aircondition.com/photos',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('11-Nov-2021'),
      },
      {
        roomNumber: 2,
        roomType: 'Luxury Room',
        amenities: 'Free Wifi',
        price: 1500,
        photos: 'http://www.aircondition.com/photos',
        checkinTime: new Date('15-Nov-2021'),
        checkoutTime: new Date('29-Nov-2021'),
      },
      {
        roomNumber: 3,
        roomType: 'Luxury Bath House',
        amenities: 'Free Hot Bat',
        price: 2000,
        photos: 'http://www.aircondition.com/photos',
        checkinTime: new Date('15-Nov-2021'),
        checkoutTime: new Date('29-Nov-2021'),
      },
    ];
  }
  hotelName: string = 'Haveley Hotels';
  numberOfRooms: number = 10;
  hideRooms: boolean = false;

  rooms: Room = {
    bookedRooms: 10,
    totalRooms: 20,
  };

  title = 'Room List';
  roomList: RoomList[] = [];
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms Listing';
  }

  selectedRoom!: RoomList;

  selectRoom(room: RoomList): void {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Villa',
      amenities: 'Air conditioned',
      price: 5000,
      photos: 'http://www.aircondition.com/photos',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('11-Nov-2021'),
    };

    this.roomList = [...this.roomList, room];
  }
}
