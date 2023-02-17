import PropTypes from 'prop-types';
import Notification from 'components/Notification/Notification';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage = 0 }) => {
  return total !== 0 ? (
    <ul className={css.statisticsList}>
      <li className={css.statisticsItem}>Good: {good}</li>
      <li className={css.statisticsItem}>Neutral: {neutral}</li>
      <li className={css.statisticsItem}>Bad: {bad}</li>
      <li className={css.statisticsItem}>Total: {total}</li>
      <li className={css.statisticsItem}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  ) : (
    <Notification />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
