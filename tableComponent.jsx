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
    data = [];
    fetchData() {                                   //Fetches the data
        const apiUrl = 'https://code-challenge.spectrumtoolbox.com/api/restaurants';
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                Authorization: 'Api-Key q3MNxtfep8Gt',
            },
        }).then((response) => response.json())
        .then(function(data) {
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

    return (
        <table>
            <thead>
                <td>Name</td>
                <td>City</td>
                <td>State</td>
                <td>Phone Number</td>
                <td>Genre</td>
            </thead>
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

        </table>
    );
  }
}
export default myComponent;