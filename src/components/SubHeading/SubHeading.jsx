import React from 'react';

import { images } from '../../constants'


{/* title = prop */}
const SubHeading = ({ title }) => ( 
  <div style={{ marginBottom: '1rem'}}>   {/*Inline Style*/} 
    <p className="p__cormorant">{title}</p> {/* Defined in index.css*/}
    <img src={images.spoon} alt="spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
