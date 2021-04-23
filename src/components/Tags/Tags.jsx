import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { nanoid } from 'nanoid';
import Title from '../Title/Title';

const Tags = ({ item, filterOrShuffle }) => {
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
    <section id="tags">
      <Container>
        <Title title={item.name} />
        <Row className="tags-wrapper">
          <Col>
            <Fade left={isDesktop} bottom={isMobile} duration={700} delay={350} distance="30px">
              <div key={nanoid()} className="tags-wrapper__info">
                <p className="tags-wrapper__info-text">{item.text}</p>
              </div>
            </Fade>
          </Col>
          <Col>
            <Fade
              cascade={true}
              right={isDesktop}
              bottom={isMobile}
              duration={700}
              delay={350}
              distance="30px"
            >
              <div className="tags-wrapper__info">
                <span className="d-flex mt-3 mr-3 tags-wrapper__info-text">
                  <button
                    type="button"
                    className="cta-btn cta-btn--resume"
                    onClick={() => filterOrShuffle()}
                  >
                    <i className="fa fa-refresh fa-inverse" /> Try another
                  </button>
                </span>
                <div className="break" />
                <span className="d-flex mt-3 mr-3 tags-wrapper__info-text">
                  or use one of these tags
                </span>
                <div className="break" />
                {item.tags.map((tag) => {
                  return (
                    <span key={nanoid()} className="d-flex mt-3 mr-3 tags-wrapper__info-text">
                      <AnchorLink
                        className="cta-btn cta-btn--resume"
                        to={`/?tag=${tag}#tags`}
                        title={tag}
                        onAnchorLinkClick={() => filterOrShuffle({'tag': tag})}
                      />
                    </span>
                  );
                })}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

Tags.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string)
  }),
  filterOrShuffle: PropTypes.func.isRequired,
};

export default Tags;
