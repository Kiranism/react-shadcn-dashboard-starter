import { Helmet } from 'react-helmet-async';

export default function PageHead({ title = 'Kutubi' }) {
  return (
    <Helmet>
      <title> {title} </title>
    </Helmet>
  );
}
