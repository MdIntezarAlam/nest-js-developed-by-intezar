import { IsBoolean, IsOptional } from "class-validator";
import { Type } from 'class-transformer'

export class GetUserParamDto {
    @IsBoolean()
    @IsOptional()
    @Type(() => Boolean)
    isMarid: boolean
}