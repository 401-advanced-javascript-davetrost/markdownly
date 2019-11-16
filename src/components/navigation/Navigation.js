import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Navigation.css';
import Tabs from './Tabs';
import { 
  getFiles, 
  getNewFileName, 
  getFileToDelete,
  getTitleSearchTerm,
  getMatchingFiles 
} from '../../selectors/navigationSelectors';
import {
  changeActiveDocument,
  setNewFileName,
  setFileToDelete,
  createNewFile,
  deleteFile,
  searchFiles,
  setTitleSearchTerm,
  setFileToOpen
} from '../../actions/navigationActions';
import AddFile from './AddFile';
import DeleteFile from './DeleteFile';
import TitleSearch from './TitleSearch';

export default function Navigation() {
  const files = useSelector(state => getFiles(state));
  const newFileName = useSelector(state => getNewFileName(state));
  const fileToDelete = useSelector(state => getFileToDelete(state));
  const titleSearchTerm = useSelector(state => getTitleSearchTerm(state));
  const matchingFiles = useSelector(state => getMatchingFiles(state));
  const dispatch = useDispatch();

  const handleTabSelect = fileName => {
    dispatch(changeActiveDocument(fileName));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createNewFile());
  };

  const handleDeleteSubmit = (event) => {
    event.preventDefault();
    dispatch(deleteFile());
  };

  const handleTitleSearch = event => {
    event.preventDefault();
    dispatch(searchFiles());
  };

  const handleSearchSelect = ({ target }) => {
    dispatch(changeActiveDocument(target.value));
  };

  const handleChange = ({ target }) => {
    if(target.name === 'fileName') dispatch(setNewFileName(target.value));
    if(target.name === 'fileToDelete') dispatch(setFileToDelete(target.value));
    if(target.name === 'titleSearchTerm') dispatch(setTitleSearchTerm(target.value));
    if(target.name === 'fileToOpen') dispatch(setFileToOpen(target.value));
  };

  return (
    <>
      <div className={styles.Navigation}>
        <div className={styles.FileMenu}>
          <AddFile 
            handleSubmit={handleSubmit} 
            handleChange={handleChange} 
            newFileName={newFileName} />
          <DeleteFile 
            handleDeleteSubmit={handleDeleteSubmit} 
            handleChange={handleChange} 
            fileToDelete={fileToDelete} 
            files={files} />
          <TitleSearch 
            handleTitleSearch={handleTitleSearch} 
            handleChange={handleChange} 
            titleSearchTerm={titleSearchTerm} 
            matchingFiles={matchingFiles} 
            handleSearchSelect={handleSearchSelect}
          />
        </div>
        <Tabs files={files} handleTabSelect={handleTabSelect} />
      </div>
    </>
  );
}
