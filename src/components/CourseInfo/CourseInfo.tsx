import { useParams } from 'react-router-dom';

interface CourseInfoProps {}

export const CourseInfo: React.FunctionComponent<CourseInfoProps> = () => {
  const { id } = useParams();

  return <>CourseInfo</>;
};
