/**
 * Extrinsic State
 * ----------------
 * This data is NOT shared.
 * It changes per object and is passed from outside.
 *
 * Each seat has:
 * - unique seat number
 * - unique reservation status
 */
export interface SeatContext {
  seatNumber: number;
  isReserved: boolean;
}
