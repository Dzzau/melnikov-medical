export type DoctorCategory = 'second' | 'first' | 'highest';

export interface Doctor {
    id: string;
    fullName: string;
    photoUrl: string;
    position: string;
    directionId: string; //одно направление
    category?: DoctorCategory;
    experienceYears: number;
    education: string[];
    specialization: string;
}