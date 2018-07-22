import PropTypes from 'prop-types';

export const QuestionType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
      correct: PropTypes.bool.isRequired
    })
  ).isRequired,
  category: PropTypes.string.isRequired
});
