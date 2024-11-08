import { BadRequestException, Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto, GetUserParamDto, UpdateUserDto } from "./dtos";

//https:loaclhost:3000/users
@Controller("users")
export class UserController {

    constructor(private usersService: UsersService) { }


    @Get(":isMarid?")
    getUsers(
        //PIPE->DefaultValuePipe : it is use to set default value
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page', new DefaultValuePipe(10), ParseIntPipe) page: number,
        @Param() parma: GetUserParamDto
    ) {
        console.log(limit, page, parma)
        return this.usersService.getAllUsers()
    }

    //https:localhost:3000/id(5467890)
    @Get(":id/")
    getusersBuId(@Param('id', ParseIntPipe) id: number) {
        console.log("type of id", typeof (id))
        return this.usersService.getUserById(id)
    }


    @Post()
    createUsers(@Body() user: CreateUserDto) {
        //this.usersService.createUser(user)
        console.log(typeof user)
        console.log(user instanceof CreateUserDto)
        return "user has been created in Nest-framework Express" + user
    }

    @Patch()
    updateUsers(@Body() user: UpdateUserDto) {
        console.log(user)
        return 'user updated successfully ' + user.name
    }

}