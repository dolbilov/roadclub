import './index.scss';
import '../index.html';

import * as constants from '../utils/constants';
import Toggle from "../components/Toggle";

const toggle = new Toggle(constants.footerThemeToggle);
toggle.setPreferTheme();
toggle.setEventListeners();
