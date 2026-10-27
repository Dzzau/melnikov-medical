export type DoctorCategory = 'second' | 'first' | 'highest';

export interface Doctor {
    id: string;
    fullName: string;
    photoUrl: string;
    position: string;
    direction: string;
    directionId: string;
    category?: DoctorCategory;
    experienceYears: number;
    education: string[];
    specialization: string;
}