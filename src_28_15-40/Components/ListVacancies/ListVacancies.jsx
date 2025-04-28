import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ListProjects.module.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import VacancyCard from '../VacancyCard/VacancyCard';

import Menu from '../Menu/Menu';

import db from '../../store/Db';


const isDateInThePast = (dateString) => {
  if (!dateString) return false; // Если дата не выбрана, возвращаем false
  const selectedDate = new Date(dateString);
  const currentDate = new Date();

  // Устанавливаем время текущей даты на полночь для корректного сравнения
  currentDate.setHours(0, 0, 0, 0);

  return selectedDate < currentDate; // Сравниваем даты
};

const ListVacancies = () => {
  // const [projects, setProjects] = useState([projectsStore.items]);

  // projects.map((el) => {
  //   projectsStore.addItem(el);
  // });

  // const vacanciesArr = vacancyStore.items;
  const vacanciesArr = db.vacancies;

  

  const activeVacancies = vacanciesArr.filter(
    (p) => !isDateInThePast(p.deadline)
  );
  const passedProjects = vacanciesArr.filter((p) => isDateInThePast(p.deadline));

  return (
    <div className={styles.container}>
      <Menu />

      <main className={styles.mainContent}>
        <div className={styles.header}>
          <h2>Vacancies</h2>
          <Link to="/createvacancy">
            <button className={styles.createBtn}>Create vacation</button>
          </Link>
        </div>
        <div className={styles.projectList}>
          {activeVacancies.map((vacancy) => (
            <VacancyCard
              key={vacancy.id}
              title={vacancy.name}
              id={vacancy.id}
              field={vacancy.field}
              deadline={vacancy.deadline}
              
              tasks={vacancy.description || ['Sample task 1', 'Sample task 2']}
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
              tasks={project.description || ['Description']}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ListVacancies;
