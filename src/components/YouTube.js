import React from 'react'
import PropTypes from 'prop-types'

const YouTube = ({ id }) => (
  <div
    className="video"
    style={{
      position: 'relative',
      paddingBottom: '56.25%',
      paddingTop: 25,
      height: 0,
    }}
  >
    <iframe
      title="YouTube player"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
    />
  </div>
)

export default YouTube

YouTube.propTypes = {
  id: PropTypes.string.isRequired,
}
