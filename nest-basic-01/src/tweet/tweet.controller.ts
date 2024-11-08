import { Controller, Get } from '@nestjs/common';

//https:localhost:3000/tweet will be route
@Controller('tweet')
export class TweetController {
    @Get()
    getAllTwwet(): string {
        return "Get all the tweets"
    }

}
