import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Experience } from 'src/entities/experiences.entity';
import { Project } from 'src/entities/projects.entity';
import { Repository } from 'typeorm';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { CreateProjectDto } from './dto/create-project.dto';

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

	async fetchJobExperiences(){
		return await this.experienceRepo.find()
	}

	async createProject(payload: CreateProjectDto){
		const newProject = this.projectRepo.create(payload)

		return await this.projectRepo.save(newProject)
	}

	async fetchProjects(){
		return await this.projectRepo.find()
	}
}
