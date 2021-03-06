import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(45deg, #e9e9e9 25%, #e6e3e3 25%, #e6e3e3 50%, #e9e9e9 50%, #e9e9e9 75%, #e6e3e3 75%, #e6e3e3 100%);
  width: ${p => p.width || '100%'};
  height: ${p => p.height || '100%'};
`
/** Default Styled used as background into storybook*/
const StoryArea = (props) => {
  const{
    style,
    className,
    height,
    width,
    children
  } = props;

  return(
    <Container
      style={style}
      className={className}
      height={height}
      width={width}
    >
      {children}
    </Container>
  );
}

StoryArea.propTypes = {
  children: PropTypes.any,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

StoryArea.defaultProps = {
  children: undefined,
  width: undefined,
  height: undefined,
  style: undefined,
  className: undefined,
};

export default StoryArea;
