import { IsNotEmpty, IsString, IsOptional, IsArray } from "class-validator";

export class CreateProjectDto {
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsString()
	@IsNotEmpty()
	description: string

	@IsString()
	@IsNotEmpty()
	image_link: string 

	@IsString()
	@IsNotEmpty()
	year: string 

	@IsString()
	@IsNotEmpty()
	github_link: string 

	@IsArray()
	@IsNotEmpty()
	skills: string[]

	@IsOptional()
	demo_link: string
}