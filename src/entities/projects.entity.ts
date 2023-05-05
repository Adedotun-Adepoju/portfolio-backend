import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'projects' })
export class Project {
	@PrimaryGeneratedColumn()
	public id: number;

	@Column()
	public name: string;

	@Column()
	public description: string;

	@Column()
	public image_link: string;

	@Column()
	public year: Number;    

	@Column('varchar', { array: true,})
	public skills: string[];

    @Column()
	public github_link: string;

    @Column()
	public demo_link: string;

	@CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
	})
	public created_at: Date;

	@UpdateDateColumn({
		type: 'timestamp',
		name: 'updated_at',
		default: () => 'CURRENT_TIMESTAMP',
	})
	public updated_at: Date;
}