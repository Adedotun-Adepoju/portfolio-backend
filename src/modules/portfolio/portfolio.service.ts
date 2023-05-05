import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Experience } from 'src/entities/experiences.entity';
import { Project } from 'src/entities/projects.entity';
import { Repository } from 'typeorm';
import { CreateExperienceDto } from './dto/create-experience.dto';

@Injectable()
export class PortfolioService {
	constructor(
		@InjectRepository(Project)
		private readonly projectRepo: Repository<Project>,

		@InjectRepository(Experience)
		private readonly experienceRepo: Repository<Experience>,
	){}

	async createJobExperience(payload: CreateExperienceDto){
		const newExperience = this.experienceRepo.create(payload)

		return await this.experienceRepo.save(newExperience)
	}
}
