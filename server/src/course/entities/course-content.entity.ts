import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContentType } from "../enums/content-type.enum";
import { CourseSection } from "./course-section.entity";

@Entity()
export class CourseContent {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'enum', enum: ContentType })
    type: ContentType;

    @ManyToOne(() => CourseSection, section => section.contents)
    section: CourseSection;

    @Column({ type: 'text', nullable: true })
    lessonContent: string;
}