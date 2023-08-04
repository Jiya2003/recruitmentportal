// import React from 'react';
// import './mid.css'; // Import the CSS file for styling

// const CompanyCards = () => {
//   const companies = [
//     {
//       id: 1,
//       name: 'Company A',
//       description: 'A leading technology company offering cutting-edge solutions.',
//       eligibility: 'Minimum 2 years of experience in software development.',
//     },
//     {
//       id: 2,
//       name: 'Company B',
//       description: 'A global retail corporation with a focus on sustainability.',
//       eligibility: 'Bachelor\'s degree in business or related field.',
//     },
//     {
//       id: 3,
//       name: 'Company C',
//       description: 'A fast-growing startup revolutionizing the health industry.',
//       eligibility: 'Experience in healthcare domain preferred.',
//     },
//     // Add more companies with their descriptions and eligibility criteria
//   ];

//   const handleApplyClick = (companyId) => {
//     alert(`You applied to ${companies.find((company) => company.id === companyId).name}`);
//   };

//   return (
//     <div className="company-cards-container">
//       {companies.map((company) => (
//         <div key={company.id} className="company-card">
//           <h3>{company.name}</h3>
//           <p>{company.description}</p>
//           <p>Eligibility Criteria: {company.eligibility}</p>
//           <button onClick={() => handleApplyClick(company.id)}>Apply Now</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CompanyCards;



import React, { useState } from 'react';
import './mid.css';


const companies = [
  {
    name: "Company A",
    skills: ["Java", "Python", "React", "Node.js"],
    eligibility: "B.Tech (CSE/IT) with 70% or above",
    description: "Company A is a leading tech company that focuses on developing innovative solutions.",
  },
  {
    name: "Company B",
    skills: ["C++", "Data Structures", "Machine Learning", "AWS"],
    eligibility: "B.Tech (CSE/ECE) with strong coding skills",
    description: "Company B is a research-oriented company that specializes in machine learning applications.",
  },
  {
    name: "Company C",
    skills: ["JavaScript", "HTML/CSS", "Angular", "Express.js"],
    eligibility: "B.Tech (IT/EEE) with knowledge of front-end and back-end technologies",
    description: "Company C is a web development company that creates interactive and user-friendly websites.",
  },
  {
    name: "Company D",
    skills: ["Python", "Data Analysis", "SQL", "Data Visualization"],
    eligibility: "M.Tech (Data Science) or related field with experience in data analysis",
    description: "Company D is a data analytics firm that offers insights for business decision-making.",
  },
  {
    name: "Company E",
    skills: ["Java", "Spring Boot", "Hibernate", "MySQL"],
    eligibility: "B.Tech (CSE/IT/ECE) with Java programming skills",
    description: "Company E is a software development company that builds robust enterprise applications.",
  },
  {
    name: "Company F",
    skills: ["Python", "Django", "PostgreSQL", "RESTful API"],
    eligibility: "B.Tech (CSE/IT) with knowledge of Python and web development",
    description: "Company F specializes in building web applications with Django framework.",
  },
  {
    name: "Company G",
    skills: ["React", "Redux", "JavaScript", "Firebase"],
    eligibility: "B.Tech (CSE/IT) with front-end development skills",
    description: "Company G is a startup that focuses on developing interactive web applications.",
  },
  {
    name: "Company H",
    skills: ["Data Science", "Machine Learning", "Python", "TensorFlow"],
    eligibility: "M.Tech (Data Science) or related field with expertise in ML algorithms",
    description: "Company H is a data-driven organization that leverages ML for predictive analysis.",
  },
  {
    name: "Company I",
    skills: ["React Native", "Mobile App Development", "Firebase", "Android", "iOS"],
    eligibility: "B.Tech (CSE/IT/ECE) with experience in mobile app development",
    description: "Company I specializes in building cross-platform mobile applications.",
  },
  {
    name: "Company J",
    skills: ["HTML/CSS", "UI/UX Design", "Photoshop", "Illustrator"],
    eligibility: "B.Tech (CSE/IT) with strong design skills and creativity",
    description: "Company J is a design studio that creates beautiful and user-friendly interfaces.",
  },
  {
    name: "Company K",
    skills: ["Node.js", "MongoDB", "Express.js", "RESTful API"],
    eligibility: "B.Tech (CSE/IT) with knowledge of backend development",
    description: "Company K is a tech startup that builds scalable and efficient backend systems.",
  },
  {
    name: "Company L",
    skills: ["Java", "JUnit", "Selenium", "TestNG"],
    eligibility: "B.Tech (CSE/IT) with passion for software testing and quality assurance",
    description: "Company L is a QA firm that ensures the quality of software products.",
  },
  
];

const CompanyCard = ({ company, skills, eligibility, description }) => {
  return (
    <>
    
    <div className="company-card">
      
      <h3 className='company-name'>{company}</h3>
      <p>{description}</p>
      <h4 className='eligiblity'>Eligibility:</h4>
      <p>{eligibility}</p>
      <h4 className='skills'>Skills Required:</h4>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <button className="apply-button">Apply Now</button>
    </div>
    </>
  );
};
const CompanyList = () => {
  const [searchSkills, setSearchSkills] = useState('');
  const [csSkillsOnly, setCsSkillsOnly] = useState(false);

  const filteredCompanies = companies.filter((company) => {
    if (csSkillsOnly) {
      return company.skills.includes('CS') && company.skills.some((skill) =>
        skill.toLowerCase().includes(searchSkills.toLowerCase())
      );
    } else {
      return company.skills.some((skill) =>
        skill.toLowerCase().includes(searchSkills.toLowerCase())
      );
    }
  });
  return (
    <div className='mid-sec'>
    <div className="company-list-container">
      <h2 className="company-list-heading">Here's the list of top companies !</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Skills..."
          value={searchSkills}
          onChange={(e) => setSearchSkills(e.target.value)}
        />
        <button>Search</button>
      </div>
      <div className="company-list">
        {filteredCompanies.map((company, index) => (
          <CompanyCard
            key={index}
            company={company.name}
            skills={company.skills}
            eligibility={company.eligibility}
            description={company.description}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default CompanyList;





