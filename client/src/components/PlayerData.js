import React from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard';

class PlayerData extends React.Component {
  constructor() {
    super();
    this._isMounted = false;
    this.state = {
      players: [],
    }
  }

  // componentDidMount() {
  //   axios
  //     .get(`http://localhost:5000/api/players`)
  //     .then(res => {
  //       // console.log(res.data);
  //       this.setState({
  //         players: res.data
  //       })
  //     })
  //     .catch(err => console.log(err)
  //     );
  //   }

  componentDidMount() {
    this._isMounted = true;
    this.setState({isMounted: true}, () => {
        axios.get(`http://localhost:5000/api/players`)
            .then( (res) => {
              // console.log(res.data);
                if(this._isMounted) {
                    this.setState({ 
                      players: res.data 
                    });
                }
            } ).catch(err => console.log(err))
    });
}

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div>
        {this.state.players.map(player => {
          return (
            <PlayerCard 
              key={player.id}
              name={player.name}
              country={player.country}
              searches={player.searches}
            />
          );
        })}
      </div>
    );
  }
}

export default PlayerData;