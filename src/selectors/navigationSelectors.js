export const getFiles = state => state.navigation.files;
export const getNewFileName = state => state.navigation.newFileName;
export const getFileToDelete = state => state.navigation.fileToDelete;
export const getUpdatedMarkdown = state => state.documents.markdown;
export const getMarkdown = state => state.navigation.files[state.navigation.activeDocument].markdown;
export const getTitleSearchTerm = state => state.navigation.titleSearchTerm;
export const getMatchingFiles = state => state.navigation.matchingFiles;

