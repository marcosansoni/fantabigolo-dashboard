import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  width: ${p => p.width || '100%'};
  height: ${p => p.height || '100%'};
`
/** Default Styled used as container of a story into storybook*/
const StoryContainer = (props) => {
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

StoryContainer.propTypes = {
  children: PropTypes.any,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

StoryContainer.defaultProps = {
  children: undefined,
  width: undefined,
  height: undefined,
  style: undefined,
  className: undefined,
};

export default StoryContainer;
