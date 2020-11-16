import React from 'react';

class myComponent extends React.Component {
  componentDidMount() {
    const apiUrl = 'https://code-challenge.spectrumtoolbox.com/api/restaurants';
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            Authorization: 'Api-Key q3MNxtfep8Gt',
        },
    }).then((response) => response.json())
    .then((data) => 
    console.log('This is your data', data));
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