import './App.css';
import Head from './Components/Head/Head';
import Conteudo from './Tela/Conteudo';
import Rodapé from './Tela/Rodapé';

function App() {
  return (
    <div className="App">
        <Head />
        <Conteudo />        
        <Rodapé />
    </div>
  );
}

export default App;