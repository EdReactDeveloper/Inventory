import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({ style, fill, width, className, size, sizeX, d, clicked }) => (
  <svg
    aria-hidden="true"
    width={width}
    style={style}
    height={width}
    viewBox={`${sizeX} ${sizeX} ${size} ${size}`}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    onClick={clicked}
  >
    <path fill={fill} d={d} />
  </svg>
);

SVG.propTypes = {
  d: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  fill: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  sizeX: PropTypes.string,
  clicked: PropTypes.func
};

SVG.defaultProps = {
  style: {},
  fill: '#000',
  width: '100%',
  size: '24',
  sizeX: '0',
  className: '',
  clicked: null
}

export default SVG;
