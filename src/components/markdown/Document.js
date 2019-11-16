import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMarkdown } from '../../selectors/navigationSelectors';
import { updateMarkdown } from '../../actions/navigationActions';
import Preview from './Preview';
import Editor from './Editor';
import styles from './Document.css';

export default function Document() {
  const markdown = useSelector(getMarkdown);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => dispatch(updateMarkdown(target.value));

  return (
    <>
      <div className={styles.Document}>
        <Editor markdown={markdown} updateMarkdown={handleChange} />
        <Preview markdown={markdown} />
      </div>
    </>
  );
}
