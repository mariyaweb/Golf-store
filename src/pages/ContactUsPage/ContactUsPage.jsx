import { Breadcrumbs } from 'features/Breadcrumbs/ui/Breadcrumbs';
import * as cls from './ContactUsPage.module.scss';
import { ContactAbout } from './ui/ContactAbout/ContactAbout';
import { ContactsTitle } from './ui/ContactsTitle/ContactsTitle';
import { ContactUs } from './ui/ContactUs/ContactUs';

function ContactUsPage() {
  return (
    <div className="wrapper">
      <Breadcrumbs className={cls.contactUsPage__breadcrumbs} />
      <ContactsTitle />
      <ContactAbout />
      <ContactUs />
    </div>
  );
}

export default ContactUsPage;
