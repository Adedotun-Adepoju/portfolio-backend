import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { CreateProjectDto } from './dto/create-project.dto';
import { PortfolioService } from './portfolio.service';

@Controller('portfolio')
export class PortfolioController {
	constructor(
		private readonly portfolioService: PortfolioService
	){}

	@Post('/experiences')
	createJobExperience(@Body() createExperienceDto: CreateExperienceDto) {
		return this.portfolioService.createJobExperience(createExperienceDto)
	}

	@Get('/experiences')
	fetchJobExperiences() {
		return this.portfolioService.fetchJobExperiences()
	}

	@Post('/projects')
	createProject(@Body() createProjectDto: CreateProjectDto) {
		return this.portfolioService.createProject(createProjectDto)
	}

	@Get('/projects')
	fetchProjects() {
		return this.portfolioService.fetchProjects()
	}
}
