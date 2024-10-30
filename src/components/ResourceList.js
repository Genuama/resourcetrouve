// src/components/ResourceList.js
import React from 'react';

const resources = [
    {
        category: "Tech Education",
        items: [
            { name: "Codecademy", description: "Interactive coding courses in various tech fields.", link: "https://www.codecademy.com" },
            { name: "freeCodeCamp", description: "Free coding lessons with certifications.", link: "https://www.freecodecamp.org" },
            { name: "Khan Academy", description: "Computer science, math, and science lessons for free.", link: "https://www.khanacademy.org" },
            { name: "Coursera", description: "Courses from top universities, with financial aid options.", link: "https://www.coursera.org" },
            { name: "MIT OpenCourseWare", description: "In-depth courses in computer science and STEM.", link: "https://ocw.mit.edu" }
        ]
    },
    {
        category: "Scholarships and Financial Aid",
        items: [
            { name: "The Gates Scholarship", description: "Last-dollar scholarship for exceptional minority high school seniors.", link: "https://www.thegatesscholarship.org" },
            { name: "Broke Scholar", description: "Search tool for scholarships based on specific criteria.", link: "https://www.brokescholar.com" },
            { name: "College Board Scholarship Search", description: "Find scholarships tailored to your needs.", link: "https://bigfuture.collegeboard.org/scholarship-search" }
        ]
    },
    {
        category: "Tech Communities and Networking",
        items: [
            { name: "Rewriting the Code", description: "Community for women in tech with mentorship and job opportunities.", link: "https://rewritingthecode.org" },
            { name: "ColorStack", description: "Support for Black and Latinx CS students.", link: "https://www.colorstack.org" },
            { name: "Out in Tech", description: "Community for LGBTQ+ tech professionals.", link: "https://outintech.com" }
        ]
    },
    {
        category: "Internships and Early-Career Programs",
        items: [
            { name: "CodePath", description: "Courses and internship prep for underserved students.", link: "https://www.codepath.org" },
            { name: "Microsoft LEAP", description: "Apprenticeship bridging education to tech careers.", link: "https://www.microsoft.com/leap" },
            { name: "Google STEP", description: "Internships for freshmen and sophomores.", link: "https://buildyourfuture.withgoogle.com/programs/step/" }
        ]
    },
    {
        category: "Career Development and Job Prep",
        items: [
            { name: "LinkedIn Learning", description: "Professional courses, sometimes free with library access.", link: "https://www.linkedin.com/learning/" },
            { name: "Pathrise", description: "Career mentorship and technical interview prep.", link: "https://www.pathrise.com" }
        ]
    }
];

const ResourceList = () => {
    return (
        <div>
            <h2>Tech Resources</h2>
            {resources.map((section) => (
                <div key={section.category} className="resource-section">
                    <h3>{section.category}</h3>
                    <ul>
                        {section.items.map((resource) => (
                            <li key={resource.name}>
                                <h4>{resource.name}</h4>
                                <p>{resource.description}</p>
                                <a href={resource.link} target="_blank" rel="noopener noreferrer">Visit {resource.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ResourceList;
