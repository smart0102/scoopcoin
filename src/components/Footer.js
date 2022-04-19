import PropTypes from "prop-types";

const FooterOne = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  containerClass,
  extraFooterClass,
  sideMenu,
}) => {
  return (
    <div className="container pb-32">
      <div className="grid md:grid-cols-4 gap-8 border-t border-gray-200 pt-12">
        <div>
          <div className="font-semibold text-lg mb-4">Website</div>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a className="hover:underline" href="/model">
                Model Hub
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/">
                Inference API
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/">
                AutoNLP
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/organizations">
                Organizations
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/">
                Contributors
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/">
                Premium Support
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-lg mb-4">Company</div>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a className="hover:underline" href="/">
                About
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/">
                Terms of service
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/">
                Privacy
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/">
                Jobs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-lg mb-4">Resources</div>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a className="hover:underline" href="/">
                Course
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/">
                Transformers docs
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/">
                Blog
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/">
                Forum
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/">
                Newsletter
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/">
                Service Status
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-lg mb-4">Social</div>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a className="hover:underline" href="/">
                GitHub
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/">
                Twitter
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

FooterOne.propTypes = {
  backgroundColorClass: PropTypes.string,
  containerClass: PropTypes.string,
  extraFooterClass: PropTypes.string,
  sideMenu: PropTypes.bool,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string,
};

export default FooterOne;
