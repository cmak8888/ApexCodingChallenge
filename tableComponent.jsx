import React from 'react';

/*
    id
    name
    address1
    city
    state
    zip
    lat long
    telephone
    tags
    website
    genre
    hours
    attire
*/

// class SearchBar extends React.Component {

// }

class TableComponent extends React.Component {
    state = {
        sorts: this.props.sorters
    };

    static defaultProps = {
        sorters: [{
            property: 'name'
        }, {
            property: 'address1'
        }, {
            property: 'city'
        }, {
            property: 'state'
        }, {
            property: 'zip'
        }, {
            property: 'telephone'
        }, {
            property: 'genre'
        }]
      };


    fetchData() {                                   //Fetches the data
        const apiUrl = 'https://code-challenge.spectrumtoolbox.com/api/restaurants';
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                Authorization: 'Api-Key q3MNxtfep8Gt',
            },
        }).then((response) => response.json())
        .then(function(data) {
            this.setState({
                data: this.parseData(sorts)
            })
            this.data = data;
        });
    }

    componentDidMount() {
        this.fetchData();
    } 

    onChangeHandler(e) {                            //Filters Data
        console.log(e);

    }

    sortData() {
        
    }

  render() {

    return data ? this.renderData(data) : this.renderLoading();
  }

  renderData(data) {
      if(data && data.length) {
          return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Phone Number</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                {data.map(data => {                                         //Retrieves sorted data
                    const {id, name, address1, city, state, zip, lat, long, telephone, tags, website, genre, hours, attire} = data;
                    return (
                        <tr key={id}>
                            <td>{name}</td>
                            <td>{city}</td>
                            <td>{state}</td>
                            <td>{telephone}</td>
                            <td>{genre}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>);
      }
  }
}
export default myComponent;