import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";



export type BooksDocument = Books & Document

@Schema()

export class Books {
    @Prop({ required: true, unique: true })
    title: string;

    @Prop({ required: true })
    author: string

    @Prop({ required: true, unique: true })
    Published: number
}

export const BooksSchema = SchemaFactory.createForClass(Books)