import { User } from "src/auth/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CourseSection } from "./course-section.entity";

@Entity()
export class Course {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column('text')
    description: string;

    @ManyToOne(() => User, user => user.id)
    instructor: User;

    @OneToMany(() => CourseSection, section => section.course)
    modules: CourseSection[];
}