// check the structure of blogs
export const checkStructureBlog = (content: any) => {
  let isValid = true;
  if (!content?.title) isValid = false;
  if (!content?.categories) isValid = false;
  if (!content?.thumbnail) isValid = false;
  if (!content?.body) isValid = false;
  return isValid;
};

export const checkStructureNews = (content: any) => {
  let isValid = true;
  if (!content?.title) isValid = false;
  if (!content?.thumbnail) isValid = false;
  if (!content?.body) isValid = false;
  return isValid;
};