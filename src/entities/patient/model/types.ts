export type BookingAccess = 'allowed' | 'restricted'; //сервер вычисляет, может ли клиент заказать талон

export interface Patient {
    id: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    avatarUrl?: string;
    bookingAccess: BookingAccess;

}