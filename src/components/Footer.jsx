import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 w-full py-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto items-start">
        <div className="space-y-4 col-span-1">
          <span className="font-headline-md text-headline-md text-on-surface font-bold">Salem G.</span>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
            Building the future of e-commerce and digital enterprise solutions with precision and passion.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-gutter md:text-right">
          <div className="space-y-4">
            <h4 className="font-label-md text-label-md text-primary uppercase tracking-widest">Connect</h4>
            <ul className="space-y-2 flex flex-col items-start md:items-end">
              <li><a href="https://www.linkedin.com/in/salem-gwashavanhu/" target="_blank" rel="noopener noreferrer" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/SALEM-BHERO" target="_blank" rel="noopener noreferrer" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">GitHub</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-label-md text-label-md text-primary uppercase tracking-widest">Legal</h4>
            <ul className="space-y-2 flex flex-col items-start md:items-end">
              <li><span className="font-body-md text-body-md text-on-surface-variant">Privacy Policy</span></li>
              <li><span className="font-body-md text-body-md text-on-surface-variant">Terms of Service</span></li>
            </ul>
          </div>
        </div>
        
        <div className="col-span-1 md:col-span-3 border-t border-outline-variant/20 mt-12 pt-8 md:text-center">
          <p className="font-body-md text-body-md text-on-surface-variant">© {new Date().getFullYear()} Salem Gwashavanhu. Technical Mastery & Precision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
