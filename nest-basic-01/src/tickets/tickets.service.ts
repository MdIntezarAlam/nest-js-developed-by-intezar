import { Injectable } from "@nestjs/common";

export interface ticketTypes {
    id: number,
    subject: string,
    purpose: string,
    reasons: string
}[]
export const ticketsData: ticketTypes[] = [
    { id: 1, subject: "to delete account", purpose: "self", reasons: "not_specified" },
    { id: 2, subject: "to delete account", purpose: "self", reasons: "not_specified" },
    { id: 3, subject: "to delete account", purpose: "self", reasons: "not_specified" },
];

@Injectable()

export class TicketsService {
    tickets: ticketTypes[] = ticketsData
    getAllTicket() {
        return this.tickets
    }
    getSingleTickets(id: number) {
        return this.tickets.find((x) => x.id === id)
    }
    createTickets(ticket: ticketTypes) {
        this.tickets.push(ticket)
    }
}