export type TimeSlotStatus = 'free' | 'booked';
export interface TimeSlot {
    startsAt: string;
    status: TimeSlotStatus;
}
