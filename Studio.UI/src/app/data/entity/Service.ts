import { Guid } from 'guid-typescript';
import { BaseEntity } from './BaseEntity';
import { Event } from './Event';
import { EventXService } from './EventXService';

export interface Service extends BaseEntity {
    serviceTittle: string; // C# property mapped to TypeScript
    serviceDescription?: string; // Optional property
    type?: string; // Optional property
    price: number; // Non-optional double
    status?: string; // Optional property
    eventXServices?: EventXService[];
}
