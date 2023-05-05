import { IsNotEmpty, IsString, IsOptional, IsArray } from "class-validator";

export class CreateProjectDto {
    @IsString()
    @IsNotEmpty()
    company: string;

    @IsString()
    @IsNotEmpty()
    job_title: string

    @IsNotEmpty()
    start_date: Date 

    @IsOptional()
    end_date: Date 

    @IsString()
    @IsNotEmpty()
    link: string 

    @IsArray()
    @IsNotEmpty()
    roles: string[]
}