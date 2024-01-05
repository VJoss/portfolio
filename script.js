document.addEventListener('DOMContentLoaded', function () {
    const projectsContainer = document.getElementById('projects');
    const projects = [
        { title: 'Stop Watch', description: 'Un projet afin de mettre en application mes compétences javascript.Dans ce projet j\'ai mis en place un Chronometre avec 3 bouton (Start/Stop/Reset).', image: 'stopWatch.jpg', githubLink: 'https://github.com/VJoss/Chronometre' },
        { title: 'Site vitrine montre', description: 'Dans ce projet je reprend la mise en page et la mise en avant d\'un produit de la célèbre société à la pomme.', image: 'siteVitrineMontre.jpg', githubLink: 'https://github.com/VJoss/Page-vitrine-achat-montre' },
        { title: 'Pong', description: 'Dans ce projet, je mets en application mes compétences en Lua/Love. Un jeu fonctionnel avec un menu et bien sûr son jeu.', image: 'pong.jpg', githubLink: 'https://github.com/VJoss/love2d' },
    ];

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.githubLink}" target="_blank">Voir sur GitHub</a>
        `;
        projectsContainer.appendChild(projectElement);
    });
});
