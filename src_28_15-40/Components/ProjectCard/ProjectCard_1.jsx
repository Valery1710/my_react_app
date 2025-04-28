import React from 'react'
import { Link } from "react-router-dom";
import styles from './ProjectCard_1.module.css';
import projectSelected from '../../store/ProjectSelected';



const ProjectCard = ({ id,title, tasks, field, deadline,isCompleted, description }) => (
  <div className={styles.projectCard} onClick={() => projectSelected.addItem(id)}>
    <Link to="/projectdetails" >
    
    <div className={styles.card}>
      <div className={styles.row}>
        <span className={styles.label}>Name:</span>
        <span className={styles.value}>{title}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>ID:</span>
        <span className={styles.value}>{id}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Field:</span>
        <span className={styles.value}>{field}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Deadline:</span>
        <span className={styles.value}>{deadline}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Description:</span>
        <span className={styles.value}>{description}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Completed:</span>
        <input
          type="checkbox"
          checked={isCompleted}
          // onChange={handleCheckboxChange}
        />
      </div>
    </div>
  

    
    </Link>
  </div>
);


export default ProjectCard
