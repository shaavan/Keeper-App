import React from 'react';

function Footer() {
    const date = new Date();
    const curYear = date.getFullYear();

    return (
        <footer>
            <p>Copyright &copy; {curYear}</p>
        </footer>
    )
}

export default Footer