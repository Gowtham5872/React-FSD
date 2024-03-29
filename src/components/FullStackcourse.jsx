import React, { useState } from 'react';

const FullStackCourseCard = () => {
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
          title: 'Full Stack Development',
          image: 'https://www.shutterstock.com/image-vector/landing-page-template-programing-full-260nw-1298336962.jpg',
          description: 'Dive into the world of web development with our comprehensive Full Stack Development course. Learn both front-end and back-end technologies including HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB. Build dynamic web applications and gain the skills needed to become a proficient full stack developer.',
        },
        {
          id: 2,
          title: 'Full Stack Development',
          image: 'https://c8.alamy.com/comp/W3XFX2/full-stack-developer-with-digital-java-code-text-full-stack-developer-and-computer-software-coding-vector-concept-programming-coding-script-java-di-W3XFX2.jpg',
          description: 'Full Stack Development course equips you with the skills to master both front-end and back-end technologies. From designing responsive user interfaces with HTML and CSS to creating robust server-side applications using technologies like Node.js and Express.js, this course provides hands-on experience to kickstart your career in web development.',
        },
        {
          id: 3,
          title: 'Full Stack Development',
          image: 'https://www.shutterstock.com/image-vector/web-development-info-banner-icons-260nw-2174932403.jpg',
          description: 'Get hands-on experience building real-world projects in our Full Stack Development course. Apply your knowledge of front-end and back-end technologies to develop interactive web applications, e-commerce platforms, and dynamic websites. Gain practical skills that are in high demand in the tech industry.'
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

export default FullStackCourseCard;