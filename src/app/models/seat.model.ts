import {SeatFlyweight} from './seat-flyweight';
import {SeatContext} from './seat-context';

/**
 * Seat instance
 * --------------
 * Combines:
 * - Flyweight (shared data)
 * - Context (unique data)
 *
 * This separation is the core idea of Flyweight pattern
 */
export interface Seat {
  flyweight: SeatFlyweight;
  context: SeatContext;
}
