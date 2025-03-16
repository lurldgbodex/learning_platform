import { useState } from 'react';
import styles from './CourseCategory.module.css';

type category = {
    id: number;
    name: string;
}

type categoriesProps = {
    categories: category[];
}

const CourseCategory: React.FC<categoriesProps> = ({ categories }) => {
    const [selectedCategory, setSelectedCategory] = useState<number[]>([]);

    const toggleCategory = (id: number) => {
        setSelectedCategory((prevSelected) => 
            prevSelected.includes(id)
                ? prevSelected.filter((categoryId) => categoryId !== id)
                : [...prevSelected, id]
        );
    };

    return (
        <div className={styles.category}>
            {categories.map((category) => (
                <p 
                    key={category.id}
                    className={`${styles.categoryItem} ${selectedCategory.includes(category.id) ? styles.active : ""}`}
                    onClick={() => toggleCategory(category.id)}
                >
                    {category.name}
                </p>
            ))}
        </div>
    );
}

export default CourseCategory;