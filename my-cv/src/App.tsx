import './style.scss'

interface Experience {
  year: number;
  description: string;
}
interface CVData {
  photo: string;
  name: string;
  lastName: string;
  position: string;
  experience: Experience[];
  education: string[];
}

const cvData: CVData  = {
  photo: 'https://placehold.co/400x400?text=FZ',
  name: 'Filip',
  lastName: 'Zieliński',
  position: 'Analityk Danych',
  experience: [{year: 2019, description: 'Specjalista ds. IT'}, {year: 2022, description: 'Analityk Danych'}],
  education: ['szkoła podstawowa nr 18 w Koszalinie', 'Computer College', 'Politechnika Koszalińska']
}
function App() {


  return (
      <main className='cv-main'>
        <header>
          <h1>CV {cvData.name} {cvData.lastName}</h1>
        </header>
        <aside>
          <h2>Personal data</h2>
          <img src={cvData.photo} alt={`${cvData.name} ${cvData.lastName} zdjecie profilowe`}/>
          <p>{cvData.name} {cvData.lastName}</p>
          <small>{cvData.position}</small>
        </aside>
        <section>
          <h2>Experience</h2>
          <ul>
              {cvData.experience.map( experience => (
                  <li key={experience.year}>
                      <strong>{experience.year}</strong> - {experience.description}
                  </li>
              ))}
          </ul>
          <h2>Education</h2>
          <ul>
            {cvData.education.map((eduction, index) => (
                <li key={index}>
                  {eduction}
                </li>
            ))}
          </ul>
        </section>
      </main>
  )
}

export default App
