import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/header';
import Footer from '../components/footer';

import '../../sass/style.scss';

class TemplateWrapper extends React.Component {
  state = {
    isScrolled: false,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isScrolled = window.scrollY > 200;
      if (isScrolled !== this.state.isScrolled) {
        this.setState({ isScrolled })
      }
    });
  }
  render() {
    return (
      <div>
        <Helmet
          title="Lorem Ipsum"
        />
        <Header isScrolled = {this.state.isScrolled} />
        {this.props.children()}
        <Footer />
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
