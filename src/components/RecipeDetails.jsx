import React from 'react';
import axios from 'axios';
import { useState } from 'react';
const RecipeDetails = (props) => {
  
    return (
        <>
         <div className='recipe-details'>
                  
                  <div className='rec-des'>
                    <ul>
                      <li>1. Boil spinach in a pressure cooker and grind it to make palak puree</li>
                      <li>2. Heat oil in a pan and fry paneer cubes in it until golden brown.</li>
                      <li>3. Remove the paneer cubes and put cumin, when it splutters, add bay leaf.</li>
                      <li>4. Add salt, garam masala, coriander powder along with red pepper. Stir till well mixed.</li>
                      <li>5. our some cream over, mix well and serve hot.</li>
                    </ul>
                  </div>
              </div>
        </>
    )
}


export default RecipeDetails;