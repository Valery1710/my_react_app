import React from 'react'
import { Link } from "react-router-dom";
import styles from './ProjectCard.module.css';
import projectSelected from '../../store/ProjectSelected';

const getFormattedText = (input) => {
  const textLen = 35
  if (input.length > textLen) {
    return input.slice(0, textLen) + '...'; // Добавляем три точки
  }
  return input; // Возвращаем текст без изменений
}

const ProjectCard = ({ id,title, tasks, field, deadline }) => (
  <div className={styles.projectCard} onClick={() => projectSelected.addItem(id)}>
    <Link to="/projectdetails" >
    <h3>Name: {title}</h3>
    <p>Id: {id}</p>
    <p>Field: {field}</p>
    <p>Deadline: {deadline}</p>
    <p>Description: {getFormattedText(tasks)}</p>
    
    </Link>
  </div>
);


export default ProjectCard
