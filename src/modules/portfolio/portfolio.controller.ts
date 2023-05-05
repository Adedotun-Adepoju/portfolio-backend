import { Controller, Get, Post } from '@nestjs/common';

@Controller('portfolio')
export class PortfolioController {
	@Post('/experiences')
	createJobExperience(): string {
		return 'Experience'
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
