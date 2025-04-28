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

  // const activeProjects = projectsArr.filter((p) => !p.isCompleted);
  // const passedProjects = projectsArr.filter((p) => p.isCompleted);

  return (
    <div className={styles.container}>
     

      <main className={styles.mainContent}>
        <div className={styles.header}>
          <h2>Vacantions</h2>
          <Link to="/createvacancy">
            <button className={styles.createBtn}>Create vacation</button>
          </Link>
        </div>
        <div className={styles.projectList}>
          {activeProjects.map((project) => (
            <VacUnderPr
              key={project.id}
              title={project.name}
              id={project.id}
              field={project.field}
              deadline={project.deadline}
              isCompleted={project.isCompleted}
              tasks={project.description || ['Sample task 1', 'Sample task 2']}
            />
          ))}
        </div>

        <h2 className={styles.sectionTitle}>Passed projects</h2>
        <div className={styles.projectList}>
          {passedProjects.map((project) => (
            <VacancyCard
              key={project.id}
              title={project.name}
              id={project.id}
              field={project.field}
              deadline={project.deadline}
              isCompleted={project.isCompleted}
              tasks={project.description || ['Sample task 1', 'Sample task 2']}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ListVacanciesForProject;
