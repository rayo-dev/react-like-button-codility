import React, { Component } from 'react';

export default class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: 100,
      isLike: false,
    };
  }

  onLikeButtonClick = () => {
    this.setState((prevState) => ({
      like: prevState.like + (prevState.isLike ? -1 : 1),
      isLike: !prevState.isLike,
    }));
  };

  render() {
    return (
      <>
        <button
          className={'like-button ' + (this.state.isLike ? 'liked' : '')}
          onClick={this.onLikeButtonClick}
        >
          {'Like'} | <span className="likes-counter">{this.state.like}</span>
        </button>

        <style>{`
            .like-button {
                font-size: 1rem;
                padding: 5px 10px;
                color: #585858;
            }
            .liked {
                font-weight: bold;
                color: #1565c0;
            }
            `}</style>
      </>
    );
  }
}
