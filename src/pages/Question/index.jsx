import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import closeIcon from '../../assets/img/close-icon.svg';
import allQuestions from '../../assets/questions.json';
import categories from '../../assets/categories.json';
import Result from '../Result';

import styles from './Question.module.scss';

const Question = () => {
  const [active, setActive] = React.useState(0);
  const [step, setStep] = React.useState(0);
  const [correctCount, setCorrectCount] = React.useState(0);
  const [questions, setQuestions] = React.useState([]);
  const location = useLocation();
  const categoryURLId = Number(location.pathname.slice(-1));

  React.useEffect(() => {
    setQuestions(allQuestions.filter((question) => question.categoryId === categoryURLId));
  }, []);

  const onClickVariant = (id) => {
    setActive(id);
  };

  const onClickNext = () => {
    setStep(step + 1);
    setActive(0);

    if (questions[step].correct === active - 1) {
      setCorrectCount(correctCount + 1);
    }

    if (step === questions.length - 1) {
      categories[categoryURLId - 1].isCompleted = true;
    }
  };

  return (
    <>
      {step > questions.length - 1 ? (
        <Result correctCount={correctCount} size={questions.length} />
      ) : (
        <div className={styles.root}>
          <Link to='/'>
            <img className={styles.close} src={closeIcon} alt='Close icon' />
          </Link>
          <img width='170' src={categories[categoryURLId - 1].svg} alt='Question Icon' />
          <h1>{questions[step].title}</h1>
          <h4>
            Вопрос {step + 1} из {questions.length}
          </h4>
          <ul className={styles.variants}>
            {questions[step].variants.map((variant, idx) => (
              <li
                className={active === idx + 1 ? `${styles.active}` : ''}
                key={idx + 1}
                onClick={() => onClickVariant(idx + 1)}>
                {variant}
              </li>
            ))}
          </ul>
          <button onClick={onClickNext}>Далее</button>
        </div>
      )}
    </>
  );
};

export default Question;
