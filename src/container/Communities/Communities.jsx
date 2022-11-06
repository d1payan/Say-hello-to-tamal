/* eslint-disable quotes */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-quotes */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const Communities = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "comms"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text"> Giving back to   <span>the community 💙 </span> <br /></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="abthead" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="abtdesc" style={{ marginTop: 25 }}>{about.description}</p>
            <a href={about.link} className="abtdesc" style={{ marginTop: 10, color: "#313bac", fontWeight: "600" }}>Visit</a>
            <a href={about.twitterlink} className="abtdesc" style={{ marginTop: 10, color: "#313bac", fontWeight: "600" }}>Checkout the tweet here</a>

          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Communities, 'app__about'),
  'community work',
  'app__whitebg',
);
