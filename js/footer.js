document.addEventListener('DOMContentLoaded', function() {
    var footer = document.createElement('div');
    footer.className = 'footer';

    var copyrightDiv = document.createElement('div');
    copyrightDiv.className = 'copirait';

    var footerText = document.createElement('p');
    footerText.className = 'footerText';
    footerText.innerHTML = 'Made by Marina Shvachko, 2024';

    copyrightDiv.appendChild(footerText);
    footer.appendChild(copyrightDiv);

    document.body.appendChild(footer);
});