import './index.scss';
import '../index.html';

import * as constants from '../utils/constants';
import Toggle from "../components/Toggle";
import BikesManager from "../components/BikesManager";

const toggle = new Toggle(constants.footerThemeToggle);
toggle.setPreferTheme();
toggle.setEventListeners();

const bikesManager = new BikesManager();
bikesManager.setEventListeners();
