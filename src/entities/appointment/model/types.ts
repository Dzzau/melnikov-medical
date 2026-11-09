export type AppointmentStatus =
    |'pending' //создана, ждёт подтверждения
    | 'confirmed' //пациент подтвердил визит
    | 'completed' //приём состоялся
    | 'cancelled' //отменена пациентом
    | 'expired' //снята: пациент не подтвердил вовремя
    | 'no_show'; //пациент не пришёл

export interface Appointment {
    id: string;
    doctorId: string; //ссылки по ID
    serviceId: string; //берутся из сущностей
    startsAt: string; //ISO
    createdAt:string;//ISO
    status: AppointmentStatus;
}