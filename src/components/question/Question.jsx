import React from 'react';
import questionMark from './question-mark.svg';
import './Question.css';

const content = 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse\n' +
    '      a pellentesque dui, non felis. Maecenas malesuada elit lectus felis,\n' +
    '      malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna.\n' +
    '      Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, \n' +
    '      dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus,\n' +
    '      mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi\n' +
    '      . Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum\n' +
    '      id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer \n' +
    '      lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae, Nulla ipsum dolor \n' +
    '      ectus blandit eu, tempor diam pede cursus vitae, ultricies eu, faucibus quis, porttitor eros cursus \n' +
    '      lectus, pellentesque eget, bibendum a, gravida ullamcorper quam. Nullam viverra consectetuer. ';

const Question = () => (
    <div className="question">
        <img src={questionMark} className="question__question-mark" alt="question-mark" />
        {content}
    </div>
);

export default Question;