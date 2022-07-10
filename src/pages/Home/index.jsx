import "./style.css";

//estado
import React, { useEffect, useReducer, useState } from "react";

//componentes
import { Card } from "../../components/Card/";

export function Home() {
  // ========= ESTADO =======
  //estado para novo nome de aluno
  const [studentName, setStudentName] = useState('');

  //estado para aluno(card)
  const [students, setStudents] = useState([]);

  const [user,setUser] = useState({
    nome:"",
    avatar:""
  });
  
  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudents(prevState => [...prevState,newStudent]);
  }


  useEffect(() => {
    fetch('https://api.github.com/users/walysonMoura')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    })
  },[])
  // o return só pode retornar uma tac , por esse motivo é necessasrio embrulhar todo o conteúdo dentro de uma div ou dentro de uma tac vazia <>,</>
  return (
    <div className="c-container">
      
      <header className="c-container__header">
        <h1 className="c-container__titulo">Lista de presença</h1>
        <div className="c-container__content">
           <strong>{user.name}</strong>
           <img className="c-container__img" src={user.avatar} alt=""/>
        </div>

      </header>

      <input
        type="text"
        placeholder="Digite seu nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button
        className="c-container__button"
        type="button"
        onClick={handleAddStudent}
      >
        Adicionar
      </button>

      {
      students.map((student) => (
         <Card
          key={student.time}
          name={student.name} 
          time={student.time} 
          /> 
       ))
      }

    </div>
  );
}
