import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const Links = ({ item }) => {
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

  const getIcon = (type) => {
    if(type) {
      if(type === 'video') {
        return <i className="fa fa-youtube-play fa-inverse" />
      }
      if(type === 'code') {
        return <i className="fa fa-github fa-inverse" />
      }
    }
    return ""
  }

  return (
    <section id="links">
      <Container>
        <div className="links-wrapper">
          <Row key={nanoid()}>
            <Col>
              <div className="links-wrapper__text">
                <h2 className="links-wrapper__text-title">Links</h2>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={500}
                  distance="30px"
                  cascade={true}
                >
                  <div>
                    {item.urls.map((url) => {
                      const { text, link, type } = url;
                      const icon = getIcon(type);
                      const separator = icon ? ' ' : '';
                      return (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--links links-wrapper__text"
                          href={link}
                          key={nanoid()}
                        >
                          {icon}{separator}{text}                          
                        </a>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

Links.propTypes = {
  item: PropTypes.shape({
    urls: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      type: PropTypes.string
  }))})
};

export default Links;
