//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const root = document.querySelector('[id= "root"]')
root.innerHTML = renderItems(data);
