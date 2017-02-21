import React, { Component, PropTypes } from 'react';

export default function pageHash(FunctionalFormElement) {
  return class PageFieldHash extends Component {
    constructor(props) {
      super(props);
      this.state = {
        locationHash: '',
      };
    }
    componentDidMount() {
      console.log(this.props);
      window.location.hash = this.props.formValues.contentName;
    }
    render() {
      return <FunctionalFormElement {...this.props} />;
    }
  };
}
