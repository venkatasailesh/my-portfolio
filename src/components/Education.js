import "./education.css"
const Education = () => {
    const education = [
      {
          
        title: "Bachelor of Technology in Computer Science and Engineering",
        institution: "Institution: Sri Venkatesawara Engineering College",
        year: "Year: 2020-2024",
        CGPA:"CGPA: 8.4",
      },
        
        {
            title: "Higher Secondary Education",
            institution:"Institution: SDHR Junior College",
            year: "Year :2020",
            CGPA:"CGPA:8.4",
          },
          {
            
            title: "Secondary Education",
            institution:"institution: Red Cherries School",
            year: "year: 2018",
            CGPA:"CGPA: 9.2",
        },
        
        
      ];
  
  return (
    <section className="teams" id="teams">
      <div className="max-width">
        <h2 className="title">My Education details</h2>
        
          <div  className="education">
      <ul>
        {education.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.institution}</p>
            <p>{item.year}</p>
            <p>{item.CGPA}</p>
          </li>
        ))}
      </ul>
    </div>
           
      </div>
    </section>
  );
};
export default Education;