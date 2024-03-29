import React, { useState } from 'react';

const DataScienceCourseCard = () => {
    const style = {
        card: {
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
        cardImgTop: {
            borderRadius: '5px 5px 0 0',
            width: '100%',
            height: 'auto',
        }
    };

    const [courses, setCourses] = useState([
        {
          id: 1,
          title: 'Datascience',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFcY4fSgltP_ns7hyq3bLKnGo1d2J6FRc9dChja8VVpV0f3-XM-LlViLO6jQ&s',
          description: 'Explore the vast world of data analysis and interpretation with our Data Science course. Learn to harness the power of data through statistical analysis, machine learning algorithms, and data visualization techniques to extract valuable insights and drive informed decision-making.',
        },
        {
          id: 2,
          title: 'Datascience',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3fujncsU563NoR9sGQTxKL4w2jhQp5p181qmGNaqVF13Smqln7WqSYN5awg&s',
          description: 'Dive deep into the realm of Data Science and unlock the secrets hidden within vast datasets. Our course covers topics such as data wrangling, predictive modeling, and data storytelling, equipping you with the skills needed to tackle real-world problems and uncover actionable insights.',
        },
        {
          id: 3,
          title: 'Datascience',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpYGS5c-OAWG12mDYRmqIJIZ5N-4cMHTjRUZb1eY5n4Azy8F8o709v_OkD8Q&s',
          description: 'Embark on a journey of discovery with our Data Science course, where you learn to transform raw data into meaningful insights. From exploratory data analysis to building predictive models, this course provides hands-on experience with industry-leading tools and techniques, preparing you for a successful career in the field of data science'
        }
    ]);

    return (
        <div className="container">
            <div className="row">
                {courses.map(course => (
                    <div key={course.id} className="col-md-4 mb-3">
                        <div className="card" style={style.card}>
                            <img src={course.image} className="card-img-top" alt={course.title} style={style.cardImgTop} />
                            <div className="card-body">
                                <h5 className="card-title">{course.title}</h5>
                                <p className="card-text">{course.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DataScienceCourseCard;