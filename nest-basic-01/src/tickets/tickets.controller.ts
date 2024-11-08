import { Controller, Get, Param, Post, Put } from "@nestjs/common";
import { TicketsService, ticketTypes } from "./tickets.service";


//https:loaclhost:3000/tickets
@Controller("tickets")
export class TicketsController {
    @Get()
    getTickets() {
        const ticketsService = new TicketsService()
        return ticketsService.getAllTicket()
    }

    @Get(":id/")
    getSingleTickets(@Param("id") id: number) {
        const ticketsService = new TicketsService()
        return ticketsService.getSingleTickets(+id)
    }

    @Post()
    createTickets() {
        const ticket: ticketTypes = { id: 1, subject: "to delete account", purpose: "self", reasons: "not_specified" }
        if (!ticket.id || !ticket.subject || !ticket.purpose || !ticket.reasons) {
            return "Enter all required fields of tickets"
        }
        else {
            const ticketsService = new TicketsService()
            ticketsService.createTickets(ticket)
            console.log("created tickets", ticket)
            return `tickets created with this id ${ticket.id}`
        }
    }
    @Put()
    updateTickets(){
        
    }
}