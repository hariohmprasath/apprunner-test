import { parallel } from 'gulp';

import i18n from './src/i18n/gulp';

export { i18n };

export default parallel(i18n);
