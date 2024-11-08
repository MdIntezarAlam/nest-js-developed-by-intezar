import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
    users: { id: number, name: string, email: string, isMarid: boolean, gender: string }[] = [
        {
            id: 1,
            name: "MIA",
            email: 'mia@gmail.com',
            gender: "male",
            isMarid: false,
        },
        {
            id: 2,
            name: "MIA",
            email: 'mia@gmail.com',
            gender: "female",
            isMarid: true,
        },
        {
            id: 2,
            name: "MIA",
            email: 'mia@gmail.com',
            gender: "other",
            isMarid: false,
        }
    ]
    getAllUsers() {
        return this.users
    }

    getUserById(id: number) {
        return this.users.find((user) => user.id === id)
    }

    createUser(user: { id: number, name: string, email: string, password: string, isMarid: boolean, gender: string }) {
        return this.users.push(user)
    }

}