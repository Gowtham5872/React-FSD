import React, { useState } from 'react';

export const CyberSecurityCourseCard = () => {
    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    };

    const imgStyle = {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
    };

    const [courses, setCourses] = useState([
        {
          id: 1,
          title: 'Cybersecurity',
          image: 'https://www.shutterstock.com/image-photo/data-protection-cyber-security-privacy-600nw-1472495273.jpg',
          description: 'Prepare for the challenges of modern cyber threats with our Cybersecurity course. Explore advanced defense strategies to safeguard against malware, phishing attacks, and social engineering tactics. Learn how to implement intrusion detection systems, firewall configurations, and access controls. Develop incident response plans and mitigation strategies to defend against cyber attacks effectively.',
        },
        {
          id: 2,
          title: 'Cybersecurity',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu8dGXUaxsODZ6OtjQRTMSvlcm9LGOc01FXd42Be0D--2JQKHfkpmNbbZ1Bg&s',
          description: 'Delve into the world of ethical hacking and penetration testing with our Cybersecurity course. Learn how to identify vulnerabilities in computer systems, networks, and applications. Gain hands-on experience with tools and techniques used by cybersecurity professionals to assess and secure digital environments. Develop the skills to become a certified ethical hacker.',
        },
        {
          id: 3,
          title: 'Cybersecurity',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvEUf7WJAINfJMU52U7ByOwI_K7SBzFBQXHmTU529k5tQPwvO9IW1gF6G9Ag&s',
          description: 'Our Cybersecurity course provides a solid foundation in the principles and practices of cybersecurity. Learn about common cyber threats, security protocols, and risk management strategies. Explore topics such as network security, cryptography, and ethical hacking. Gain practical skills to protect digital assets and mitigate security breaches.',
        }
    ]);

    return (
        <div className="container">
            <div className="row">
                {courses.map(course => (
                    <div key={course.id} className="col-md-4 mb-3">
                        <div className="card" style={cardStyle}>
                            <img src={course.image} className="card-img-top" alt={course.title} style={imgStyle} />
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