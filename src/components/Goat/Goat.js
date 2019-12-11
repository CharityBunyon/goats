import React from 'react';
import PropTypes from 'prop-types';
import goatShape from '../../helpers/propz/goatShape';

class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
    freeGoat: PropTypes.func,
  }

  freeGoatEvent = (e) => {
    const { freeGoat, goat } = this.props;
    e.preventDefault();
    freeGoat(goat.id);
  }

  useGoatEvent = (e) => {
    const { useGoat, goat } = this.props;
    e.preventDefault();
    useGoat(goat.id);
  }

  render() {
    const { goat } = this.props;
    return (
      <div className="container">
        <img className="card-img-top" src={goat.imgUrl} alt="Card cap"/>
        <div className=" card card-body">
          <h5 className="card-title">{goat.name}</h5>
          <p className="card-text">{goat.age}</p>
          <p className="card-text">{goat.description}</p>
          {
          (goat.isBusy) ? (<button className="btn btn-danger" onClick={this.freeGoatEvent}>Free Me</button>)
            : (<button className="btn btn-info" onClick={this.useGoatEvent}>Use Me</button>)
          }
        </div>
      </div>
    );
  }
}

export default Goat;
