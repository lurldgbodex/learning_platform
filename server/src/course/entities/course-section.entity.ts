import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./course.entity";
import { CourseContent } from "./course-content.entity";

@Entity()
export class CourseSection {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    order: number;

    @ManyToOne(() => Course, course => course.modules)
    course: Course;

    @OneToMany(() => CourseContent, content => content.section)
    contents: CourseContent[];
}