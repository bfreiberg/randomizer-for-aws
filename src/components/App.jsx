import React, { useState, useEffect } from 'react';
import config from 'react-reveal/globals';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import Hero from './Hero/Hero';
import Tags from './Tags/Tags';
import Links from './Links/Links';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import awsData from '../data/aws-data';
import { heroData, footerData } from '../data/site-data';

config({ ssrFadeout: true });


function App({ location }) {
  const [hero, setHero] = useState({});
  const [footer, setFooter] = useState({});

  const [count, setCount] = useState(Math.floor(Math.random() * awsData.length));

  // Fisher Yates optimized shuffle
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const filterByTag = (query, item) => {
    const tag = query['tag'];
    //console.log("Filtering by tag " + JSON.stringify(tag, null, 2));
    let filtered = awsData.filter((entry) => {
      //console.log("Entry " + JSON.stringify(entry.name, null, 2) + " contains tags " + JSON.stringify(entry.tags, null, 2));
      return entry.tags.includes(tag)
    });
    //console.log("Filtered " + JSON.stringify(filtered, null, 2));
    if (filtered.length > 1) {
      // Remove current item from candidates
      if (item) {
        filtered = filtered.filter((entry) => entry.name !== item.name);
      }
      shuffleArray(filtered);
    }
    return filtered[0] || { name: 'You got me 🤷', text: "Sorry, I couldn't find anything for your tag: " + tag + ".", urls: [], tags: ['Serverless', 'New in 2021', 'Machine Learning'] };
  };

  // Checks tag params first, fallback to url params
  const shuffleByTag = (tag, item) => {
    let filtered = awsData[count];
    if (tag) {
      filtered = filterByTag(tag, item);
    } else if (location.search) {
      filtered = filterByTag(queryString.parse(location.search), item);
    }
    //console.log("Item " + JSON.stringify(filtered, null, 2));
    return filtered;
  }

  const shuffle = () => {
    if ('URLSearchParams' in window) {
      // Reset URL
      history.pushState(null, '', window.location.pathname + "#tags");
      // Clear query params
      location.search = "";
    }
    setCount((count + 1) % awsData.length);
    return awsData[(count + 1) % awsData.length];
  };

  const [item, setItem] = useState(shuffleByTag());

  const filterOrShuffle = (tag) => {
    tag ? setItem(shuffleByTag(tag, item)) : setItem(shuffle());
  }

  useEffect(() => {
    setHero({ ...heroData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, footer }}>
      <Hero />
      <Tags
        item={item}
        filterOrShuffle={filterOrShuffle}
      />
      <Links item={item} />
      <Footer />
    </PortfolioProvider>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string
  }),
};

export default App;
