import 'font-awesome/css/font-awesome.min.css';
import './styles.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faHome, faEnvelope, faMap, faUser } from '@fortawesome/fontawesome-free-solid'
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faHome, faEnvelope, faMap, faUser)

export { default } from 'next/app'