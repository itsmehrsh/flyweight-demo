import {Component} from '@angular/core';
import {Seat} from '../../models/seat.model';
import {SeatFlyweightFactory} from '../../flyweight/seat-flyweight.factory';

@Component({
  selector: 'app-seat-demo',
  templateUrl: './seat-demo.component.html',
  styleUrls: ['./seat-demo.component.scss']
})
export class SeatDemoComponent {

  /**
   * Final objects used by UI
   * Flyweight + Context already composed
   */
  seats: Seat[] = [];

  private factory = new SeatFlyweightFactory();

  constructor() {
    this.createSeats();
    this.debugFlyweights();
  }

  private createSeats(): void {
    // Shared intrinsic state
    const sharedFlyweight = this.factory.getFlyweight('standard-seat');

    for (let i = 1; i <= 300; i++) {
      this.seats.push({
        flyweight: sharedFlyweight,
        context: {
          seatNumber: i,
          isReserved: Math.random() > 0.7
        }
      });
    }
  }

  private debugFlyweights(): void {
    console.log(
      'Flyweight instances:',
      this.factory.getFlyweightCount()
    );
  }
}
