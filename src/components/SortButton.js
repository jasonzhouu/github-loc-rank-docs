import React, { PureComponent } from 'react';

const SORTDIRECTION = {
  ascending: 'ascending',
  descending: 'descending',
};

class SortButton extends PureComponent {
  render() {
    const { sortState, sort, children } = this.props;
    let className;
    if (children.toLowerCase() === sortState.type.toLowerCase()) {
      switch (sortState.direction) {
        case SORTDIRECTION.ascending:
          className = SORTDIRECTION.ascending;
          break;
        case SORTDIRECTION.descending:
          className = SORTDIRECTION.descending;
          break;
        default:
          break;
      }
    }
    return (
      <button onClick={()=>{sort(children)}} className={className}>
        {children}
      </button>
    );
  }
}

export default SortButton;
