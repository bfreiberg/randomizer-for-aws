import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import App from '../components/App';
import { headData } from '../data/site-data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const index = ({ location }) => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description} />
      </Helmet>
      <App location={location} />
    </>
  );
};

index.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired,
    pathname: PropTypes.func.isRequired,
  }),
};

export default index;
