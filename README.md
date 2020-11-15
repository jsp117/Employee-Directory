# Employee-Directory

## Description

This application is a searchable and sortable employee directory built with React. To begin this application, I first laid out the necessary components needed to render each piece of the page, the main pieces being the header containing a search bar, and a table to display all employees. After setting up and styling these components, I built out a function to call the randomUser API to fill an array with random users. I utilized the useEffect method to render the initial page displaying all users as well as set the states of users and displayUsers to the return value of the API call. The displayUsers array as well as the boolean "loading" are sent to the table component and used to display all users, as well as a loading symbol when the API call is being sent. The function searchUsers is sent to the searchbar as a prop in order to take the value of the text field and use it to search the array of users. Using the filter method, I created a new array of users that include the search term and use it to display the users that are being searched for. Using a second useEffect method, the page renders every time a user types something in the search bar. Lastly, I created a function to sort users by name, phone number and age, then passed the function to Table. Whenever a user clicks a row label, the function "sort" is run. This function takes the text value of the label and uses if statements to sort by that value using the sort method.

![Usage](/public/assets/usagenew.gif)

## Table of Contents
* [Description](#description)
* [Deployed Link](#deployed-link)
* [Code Snippets](#code_snippets)
* [Built With](#built_with)
* [Author](#author)
* [License](#license)
* [Acknowledgements](#acknowledgements)


## Deployed Link

* [See Live Site](https://jsp117.github.io/Employee-Directory/)


## Code_Snippets

This code snippet displays the useEffect method that renders the page each time the displayUsers state is changed, as well as the searchUsers function. The searchUsers function takes the value of the text field each time anything is typed, and uses the filter method to create a new array of users that include any of the user inputted text. Then it sets displayUsers to that array in order to display the users being searched for.

```
 useEffect(() => {
 }, [displayUsers])

    function searchUsers(event) {
        event.preventDefault();
        setSearch(event.target.value);
        let arr = users.filter(x => x.name.first.toLowerCase().includes(event.target.value.toLowerCase()) 
        || x.name.last.toLowerCase().includes(event.target.value.toLowerCase()) 
        || x.phone.includes(event.target.value) || x.email.toLowerCase().includes(event.target.value.toLowerCase()) 
        || x.dob.date.split("T")[0].includes(event.target.value));
        setDisplay(arr);
    }
```

This code snippet shows how the users are displayed on the page. The array displayUsers is passed down as a prop, and each piece is displayed using the map method. Using a terniary operator, either the text "loading" is displayed or the users depending if the API has returned anything.


```
<table className="container-fluid">
                <thead>
                    <tr className="row pt-5">
                        <th className="col">Picture</th>
                        <th className="col">Name</th>
                        <th className="col">Phone</th>
                        <th className="col">Email</th>
                        <th className="col">Date of Birth</th>
                    </tr>
                </thead>
                <tbody>{!loading ? users.map(x => {
                    return <tr key={x.login.uuid} className="row">
                        <td className="col"><img src={x.picture.medium} alt={x.name.first + " " + x.name.last}></img></td>
                        <td className="col">{x.name.title + " " + x.name.first + " " + x.name.last}</td>
                        <td className="col">{x.phone}</td>
                        <td className="col">{x.email}</td>
                        <td className="col">{x.dob.date.split("T")[0]}</td>
                    </tr>;
                }) : "Loading..."}</tbody>
            </table>
```

## Built_with
* [React](https://reactjs.org/)
* JavaScript
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Bootstrap](https://getbootstrap.com/)
* [npm](https://www.npmjs.com/)
* [Github](https://github.com/)

## Author
Jonathan SanPedro - Bachelors of Information Technology at Rutgers New Brunswick - Student at Berkeley Coding Bootcamp


## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MIT License

Copyright &copy; [2020] [Jonathan J. SanPedro]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Acknowledgements

* Thank you to my teachers Jerome, Manuel, Kerwin, Mahi and Ryan

