import { Controller, Get, Param, Post } from "@nestjs/common";
import { AddressService } from "./address.service";

@Controller("address")
export class AddressController {
    @Get()
    getAddress() {
        const addressService = new AddressService()
        return addressService.getAllAddress()
    }

    @Get(":id/")
    getSignleAddress(@Param("id") id: number) {
        const addressService = new AddressService()
        return addressService.getAddressById(+id)
    }

    @Post()
    createAddress() {
        const newAddress = {
            id: 3,
            username: "username",
            email: "email",
            street1: "stree1",
            stree2: "stree2",
            address: "address"
        }
        const addressService = new AddressService()
        addressService.createAddress(newAddress)
        return `tickets created with this id ${newAddress.id}`
    }
}