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
	fetchJobExperiences(): string {
		return 'Experiences'
	}

	@Post('/skills')
	createSkill(): string {
		return 'Skill'
	}

	@Get('/skills')
	fetchSkills(): string {
		return 'skills'
	}

	@Post('/projects')
	createProject(): string {
		return 'Project'
	}

	@Get('/projects')
	fetchProjects(): string {
		return 'Projects'
	}
}
