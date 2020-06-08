import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const projects = [
    {name: "Project Awesome", likes: 1},
    {name: "Project Awesomest", likes: 2},
    {name: "The REAL project awesome", likes: 3},
    {name: "The real real blah blah", likes: 4},
    {name: "a new project wow", likes: 5},
    {name: "another one look at this!", likes: 6},
  ];

  const colors = ["blue", "red", "green", "purple"];

  const myStyle = {
    maxWidth: "30%", 
    borderRadius: "5px", 
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)", 
    padding: "10px", 
    margin: "10px",
  };

  return (
    <div className="App">
      {projects.map((project, i) => {
        return <Card style={{...myStyle, backgroundColor: colors[i % colors.length]}} name={project.name} key={i} likes={project.likes} />
      })}
    </div>
  );
}

export default App;
