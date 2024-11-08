import { Injectable } from "@nestjs/common";

export interface addressTypes {
    id: number,
    username: string,
    email: string,
    street1: string,
    stree2: string,
    address: string
}[]

export const addressDoc: addressTypes[] = [
    {
        id: 1, username: "username",
        email: "email",
        street1: "stree1",
        stree2: "stree2",
        address: "address"
    }
]

@Injectable()
export class AddressService {
    addresses: addressTypes[] = addressDoc

    getAllAddress() {
        return this.addresses
    }
    getAddressById(id: number) {
        return this.addresses.find((x) => x.id === id)
    }
    createAddress(addr: addressTypes) {
        return this.addresses.push(addr)
    }
}