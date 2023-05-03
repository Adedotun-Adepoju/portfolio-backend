import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'experiences' })
export class Experience {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public company: string;

    @Column()
    public job_title: string;

    @Column({ type: 'date'})
    public start_date: Date;

    @Column({ type: 'date'})
    public end_date: Date;    

    @Column()
    public link: string;

    @Column('varchar', { array: true,})
    public skills: string[];

    @CreateDateColumn({
        type: 'timestamp',
        name: 'created_at',
        default: () => 'CURRENT_TIMESTAMP',
      })
    public createdAt: Date;

    @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
    })
    public updatedAt: Date;
}