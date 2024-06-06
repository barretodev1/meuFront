import { useEffect } from 'react'
import './styles.css'
import Trash from '../../src/assets/lixo.svg'
import api from '../../src/services/api'
function Home() {
let users = []

  async function getUsers() {
    users = await api.get('/users')
  }

  useEffect(() => {
    getUsers()
  }, []) 

  return ( 
    
  <div className='container'>
    <form>
      <h1>Cadastro de Usuários</h1>
      <input placeholder='Número do cartão' type='text' name='Nome'/>
      <input placeholder='Data de Validade' type='email' name='E-mail'/>
      <input placeholder='CVV' type='numberr' name='Idade'/>
      <button className='meu-botaao' type='button'>Cadastrar</button>
    </form>


  {users.map((user) => (
   <div className='inteiro' key={user.id}>
    
      <div>
        <p>Nome: <span>{user.name}</span></p>
        <p>E-mail: <span>{user.email}</span></p>
        <p>Idade: <span>{user.age}</span></p>
      </div>
    
    <button>
      <img src={Trash}/>
    </button>
  </div>
))}

      
  </div>

  )
}

export default Home
