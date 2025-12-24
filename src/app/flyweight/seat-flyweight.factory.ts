import {SeatFlyweight} from '../models/seat-flyweight';

/**
 * Flyweight Factory
 * -----------------
 * Responsible for:
 * - creating flyweight objects
 * - caching them
 * - reusing existing instances
 *
 * IMPORTANT:
 * Flyweight without Factory is meaningless.
 */
export class SeatFlyweightFactory {
  /**
   * Cache of flyweights
   * Key represents a unique shared configuration
   */
  private flyweights = new Map<string, SeatFlyweight>();

  /**
   * Returns an existing flyweight if available
   * Otherwise creates and stores a new one
   */
  getFlyweight(type: string): SeatFlyweight {
    if (!this.flyweights.has(type)) {
      // Creating flyweight ONLY ONCE
      this.flyweights.set(
        type,
        new SeatFlyweight(
          'square',
          'blue',
          'chair'
        )
      );
    }

    return this.flyweights.get(type)!;
  }

  /**
   * Debug helper
   * Shows how many flyweight objects exist in memory
   */
  getFlyweightCount(): number {
    return this.flyweights.size;
  }
}
