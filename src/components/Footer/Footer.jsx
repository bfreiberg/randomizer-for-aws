import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://freiberg.dev'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Ben Freiberg - Template based on{' '}
          <a
            href="https://github.com/cobidev/gatsby-simplefolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby Simplefolio
          </a>{' '}
          developed by{' '}
          <a href="https://github.com/cobidev" target="_blank" rel="noopener noreferrer">
            Jacobo Martínez
          </a>
        </p>
        <hr />
        <p className="footer__text">
          Amazon Web Services, AWS, Amazon EC2, AWS Lambda, Amazon S3 and any other AWS Marks are trademarks of Amazon.com, Inc. or its affiliates in the United States and/or other countries.
        </p>
        <hr />
        <p className="footer__text">
          This website is not affiliated, endorsed or sponsored by AWS.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
