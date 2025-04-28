import React from 'react';
import styles from './VacUnderPr.module.css'; // Импортируем CSS-модуль

const VacUnderPr= ({ name, field, deadline, description }) => {
  return (

<div className={styles.myComponent}>
  
      <div className={`${styles.field} ${styles.nameField}`}>
        <i>Name:</i> {name}
      </div>
      <div className={`${styles.field} ${styles.fieldField}`}>
        <i>Field:</i> {field}
      </div>
      <div className={`${styles.field} ${styles.deadlineField}`}>
        <i>Deadline:</i> {deadline}
      </div>
      <div className={`${styles.field} ${styles.description}`}>
        <i>Description:</i> {description}
      </div>
    </div>
  );
////////////////
<div className={styles.myComponent}>
      <div className={styles.field}>
        <strong>Name:</strong> {name}
      </div>
      <div className={styles.field}>
        <strong>Field:</strong> {field}
      </div>
      <div className={styles.field}>
        <strong>Deadline:</strong> {deadline}
      </div>
      <div className={styles.field}>
        <strong>Description:</strong> {description}
      </div>
    </div>
  

////////////////



  
};

export default VacUnderPr;