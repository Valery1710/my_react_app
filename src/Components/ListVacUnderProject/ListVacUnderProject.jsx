import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ListVacUnderProject.module.css';
import VacancyCard from '../VacancyCard/VacancyCard';

import VacUnderPr from '../VacUnderPr/VacUnderPr';
import db from '../../store/Db';


const isDateInThePast = (dateString) => {
  if (!dateString) return false; // Если дата не выбрана, возвращаем false
  const selectedDate = new Date(dateString);
  const currentDate = new Date();

  // Устанавливаем время текущей даты на полночь для корректного сравнения
  currentDate.setHours(0, 0, 0, 0);

  return selectedDate < currentDate; // Сравниваем даты
};

const ListVacanciesForProject = () => {
  // const [projects, setProjects] = useState([projectsStore.items]);

  // projects.map((el) => {
  //   projectsStore.addItem(el);
  // });

  // const projectsArr = vacancyStore.items;
  const projectsArr = db.vacancies;

  console.log('projectsArr', projectsArr.length);

  const activeProjects = projectsArr.filter(
    (p) => !isDateInThePast(p.deadline)
  );
  const passedProjects = projectsArr.filter((p) => isDateInThePast(p.deadline));


  return (
    <div className={styles.container}>
     

      <main className={styles.mainContent}>
        <div className={styles.header}>
          <h3>Vacancies for this project</h3>

        </div>
        </main>
        <div className={styles.projectList}>
          {db.vacancies.map((project) => (
            <div>
              
            <VacUnderPr
              key={project.id}
              name={project.name}
              id={project.id}
              field={project.field}
              deadline={project.deadline}
            
              description={project.description || ['Sample task 1', 'Sample task 2']}
            />
            </div>
          ))}
        </div>

    </div>
  );
};

export default ListVacanciesForProject;
