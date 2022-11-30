import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <p>React JS</p>
      </header>
      <main>
        <section className="title-box">
          <h1>React JS</h1>
          <p>Biblioteca JavaScript para criar SPAs</p>
          <a href='https://reactjs.org/' target="_blank">Site Oficial</a>
        </section>

        <section className="requirements-box">
          <h2>Requisitos</h2>
          <p>Veja abaixo os requisitos mínimos para aprender React JS:</p>

          <div className='cards-box'>
            <div className='card'>
              <h3>HTML</h3>
              <p>Aprender a estruturar os elementos da página com HTML</p>
            </div>
            <div className='card'>
              <h3>CSS</h3>
              <p>Aprender a estilizar os elementos da página com CSS</p>
            </div>
            <div className='card'>
              <h3>JavaScript</h3>
              <p>Aprender a linguagem utilizada pelo React JS, o JavaScript</p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>Curso de introdução de React JS - DevMedia</p>
        <p>Coded by: <a href="https://github.com/leozizz" target="_blank">Leozizz</a></p>
      </footer>
    </div>
  );
}

export default App;