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

class myComponent extends React.Component {
    data = [];
    componentDidMount() {
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
        </table>
    );
  }
}
export default myComponent;