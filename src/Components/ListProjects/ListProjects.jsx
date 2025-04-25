import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import styles from './ListProjects.module.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import Menu from '../Menu/Menu';
import projectsStore from '../../store/ProjectsStore';

const ListProjects = () => {
  // const [projects, setProjects] = useState([projectsStore.items]);




  // projects.map((el) => {
  //   projectsStore.addItem(el);
  // });

  const projectsArr = projectsStore.items;

  console.log('projectsArr', projectsArr.length);

  const activeProjects = projectsArr.filter((p) => !p.isCompleted);
  const passedProjects = projectsArr.filter((p) => p.isCompleted);

  return (
    <div className={styles.container}>
      <Menu />

      <main className={styles.mainContent}>
        <div className={styles.header}>
          <h2>Active projects MainPage</h2>
          <Link to="/createproject">
          <button className={styles.createBtn}>Create project</button>
          </Link>
        </div>
        <div className={styles.projectList}>
          {activeProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.name}
              id={project.id}
              field={project.field}
              tasks={project.description || ['Sample task 1', 'Sample task 2']}
            />
          ))}
        </div>

        <h2 className={styles.sectionTitle}>Passed projects</h2>
        <div className={styles.projectList}>
          {passedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.name}
              id={project.id}
              // tasks={project.description || ['Sample task 1', 'Sample task 2']}
              tasks={project.description} // || ['Sample task 1', 'Sample task 2']}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ListProjects;
