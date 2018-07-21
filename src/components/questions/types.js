import PropTypes from 'prop-types';

export const QuestionType = PropTypes.shape({
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      answer: PropTypes.string.isRequired,
      correct: PropTypes.bool.isRequired
    })
  ).isRequired,
  category: PropTypes.string.isRequired
});
