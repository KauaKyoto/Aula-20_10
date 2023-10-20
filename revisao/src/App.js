import './App.css';
import Imagem from './img/amogus.jpg';
import NoticiaComponente from './components/Noticia';

function App() {
  return (
    <div className="App">
      <h1> Notícia SUS </h1>
      <NoticiaComponente 
      titulo="Amogus"
      imagem={Imagem}
      descricao="Among Us é um jogo onde que resumidamente, você tem que descobrir o(s) assassino(s) e expulsá-los da nava com a ajuda
      dos outros tripulantes presentes na nave. Faça as suas tarefas para ganharem o jogo e reportem os corpos achados, para discutirem
      sobre o ocorrido."
      categoria="Categoria: Jogo Eletrônico e Multiplayer."
      />    
    </div>
  );
}

export default App;