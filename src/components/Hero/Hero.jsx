import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <h1 className="hero-title">
          {title || "Can't decide which "}{' '}
          <span className="text-color-main">{name || 'AWS Service'}</span> to try next?{' '}
          {subtitle || 'Let me help you.'}
        </h1>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <p className="hero-cta">
            <Link to="tags" smooth duration={1000}>
              <span className="cta-btn cta-btn--hero">{cta || "Let's go"}</span>
            </Link>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
