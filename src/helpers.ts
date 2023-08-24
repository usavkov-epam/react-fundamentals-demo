export const formatCreationDate = (value: string, locale = 'ru') => {
  return new Date(value).toLocaleDateString(locale);
};

export const getAuthorsNames = (value) => value;

export const getCourseDuration = (value: number) => {
  const minutes = value % 60;
  const hours = (value - minutes) / 60;

  return `${hours < 10 ? '0' + hours : hours}:${minutes} ${
    hours === 1 ? 'hour' : 'hours'
  }`;
};
