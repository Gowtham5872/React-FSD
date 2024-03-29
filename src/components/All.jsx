import { useState } from "react";
const All = () => {
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
          image: 'https://images.unsplash.com/photo-1573165455938-c4ef66c107aa?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          description: 'This course covers front-end and back-end development technologies.',
        },
        {
          id: 2,
          title: 'Data Science',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJXjRm-u_fr4tye9jW4virZxqItiYtTippoOLmzpD78RkSsDGGFsJva5dVg&s',
          description: 'Learn about data analysis, machine learning, and data visualization.',
        },
        {
          id: 3,
          title: 'Cyber Security',
          image: 'https://www.shutterstock.com/image-photo/data-protection-cyber-security-privacy-600nw-1472495273.jpg',
          description: 'Explore techniques and tools for protecting digital systems and data.',
        }
    ]);

    return (
        <div className="container">
            <div className="row">
                {courses.map(course => (
                    <div key={course.id} className="col-md-4 mb-3">
                        <div className="card" style={style.card}>
                            <img src={course.image} className="card-img-top" alt={course.title} style={style.cardImgTop}/>
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

export default All;