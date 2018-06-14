import React from 'react';

export default class ThemedDecorations extends React.Component {
  render() {
    const theme = this.props.theme
    const childrenWithWrapperDiv =
    React.Children.map(this.props.children, child => {
      return (
        <div className={theme}>{child}</div>
      );
   });

      return (
        <div className="themed-decorations">
          {childrenWithWrapperDiv}
        </div>
      )
    }
  };
