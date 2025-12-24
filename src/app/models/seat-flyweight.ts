/**
 * Flyweight object
 * -----------------
 * This class contains ONLY shared (intrinsic) state.
 *
 * Intrinsic state:
 * - data that is identical across many objects
 * - does NOT change per usage
 * - ideal candidate for memory sharing
 *
 * In this example:
 * shape, color, icon are shared between thousands of seats
 */
export class SeatFlyweight {
  constructor(
    public readonly shape: string,
    public readonly color: string,
    public readonly icon: string
  ) {}
}
