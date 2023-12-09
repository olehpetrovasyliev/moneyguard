export const getMonthAndYear = () => {
  return {
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  };
};

export const getDateForSort = isoDate => {
  return Number(isoDate.split('-').join(''));
};
