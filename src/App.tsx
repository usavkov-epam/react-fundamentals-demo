import keyBy from 'lodash/keyBy';
import { useEffect, useMemo, useState } from 'react';

import { CourceCard } from './components';

import './style.css';

const fetchCourses = () =>
  import('./mockData').then(({ mockedCoursesList }) => mockedCoursesList);
const fetchAuthors = () =>
  import('./mockData').then(({ mockedAuthorsList }) => mockedAuthorsList);

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    setIsLoading(true);

    Promise.all([
      fetchCourses().then(setCourses),
      fetchAuthors().then(setAuthors),
      new Promise((res) => setTimeout(res, 3000)), // delay
    ]).then(() => setIsLoading(false));
  }, []);

  const authorsMap = useMemo(() => keyBy(authors, 'id'), [authors]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="main">
      {courses.map(
        ({
          authors: _courceAuthors,
          title,
          id,
          duration,
          description,
          creationDate,
        }) => (
          <CourceCard
            key={id}
            authorsMap={authorsMap}
            metadata={{ authors: _courceAuthors, duration, creationDate }}
            actions={[
              { label: 'Show course', onClick: () => console.log('id', id) },
              { label: '🗑', onClick: () => console.log('id', id) },
              { label: '✎', onClick: () => console.log('id', id) },
            ]}
            description={description}
            title={title}
          />
        )
      )}
    </main>
  );
}
