window.onload = function() {
    loader();
};


function loader(){

    let projects = [
        {
            title: 'SKM: intranet inteligente1',
            description: 'Proyecto interno',
            labels: ['Intranet', 'Buscador inteligente'],
            type: 'enCurso'
        },
        {
            title: 'SKM: intranet inteligente2',
            description: 'Proyecto interno',
            labels: ['Intranet', 'Buscador inteligente'],
            type: 'relacionados'
        },
        {
            title: 'SKM: intranet inteligente3',
            description: 'Proyecto interno',
            labels: ['Intranet', 'Buscador inteligente'],
            type: 'cerrados'
        },
        {
            title: 'SKM: intranet inteligente4',
            description: 'Proyecto interno',
            labels: ['Intranet', 'Buscador inteligente'],
            type: 'cerrados'
        },
        {
            title: 'SKM: intranet inteligente5',
            description: 'Proyecto interno',
            labels: ['Intranet', 'Buscador inteligente'],
            type: 'enCurso'
        }
    ];
    
        // POR DEFECTO
        filterList("");
    
        // ALL BUTTON
        let allButton = document.querySelector('#allButton');
        allButton.addEventListener('click', ()=>filterList(""));
        
    
        // PROCESS BUTTON
        let processButton = document.querySelector('#processButton');
        processButton.addEventListener('click', ()=>filterList("enCurso"));
        
    
    
        // REL BUTTON
        let relButton = document.querySelector('#relButton');
        relButton.addEventListener('click', ()=>filterList("relacionados"));
    
    
        // CLOSED BUTTON
        let closedButton = document.querySelector('#closedButton');
        closedButton.addEventListener('click', ()=>filterList("cerrados"));
    
    
        function filterList(typeProject){

            let allList = document.querySelector('#allList');
            let processList = document.querySelector('#processList');
            let relList = document.querySelector('#relList');
            let closedList = document.querySelector('#closedList');

            if(typeProject === "enCurso"){
                processList.classList.add('card__tab-menu--active');

                allList.classList.remove('card__tab-menu--active');

                relList.classList.remove('card__tab-menu--active');

                closedList.classList.remove('card__tab-menu--active');
            }
            else if(typeProject === "relacionados"){
                relList.classList.add('card__tab-menu--active');

                allList.classList.remove('card__tab-menu--active');

                processList.classList.remove('card__tab-menu--active');

                closedList.classList.remove('card__tab-menu--active');
            }
            else if(typeProject === "cerrados"){
                closedList.classList.add('card__tab-menu--active');

                allList.classList.remove('card__tab-menu--active');

                processList.classList.remove('card__tab-menu--active');

                relList.classList.remove('card__tab-menu--active');
            }
            else{
                allList.classList.add('card__tab-menu--active');

                processList.classList.remove('card__tab-menu--active');

                relList.classList.remove('card__tab-menu--active');

                closedList.classList.remove('card__tab-menu--active');
            }

    
    
            document.querySelector("#card__project-wrapper").innerHTML= "";
            let projectProcess;
            if(typeProject !== ""){
                projectProcess = projects.filter((projects) =>{
                    return projects.type === typeProject;
                });
            }
            else{
                projectProcess = projects;
            }
            projectProcess.forEach((a) => {

                let cardProject = document.createElement("div");
                cardProject.classList.add("card__project");

                    // CARD__LINK
                    let cardLink = document.createElement("a");
                    cardLink.textContent = a.title;
                    cardLink.setAttribute("href", "#");
                    cardLink.classList.add("card__link");
                    cardProject.appendChild(cardLink);

                    // CARD__PARAGRAPH
                    let cardParagraph = document.createElement("span");
                    cardParagraph.textContent = a.description
                    cardParagraph.classList.add("card__paragraph");
                    cardProject.appendChild(cardParagraph);

                    // CARD__PILLS
                    let cardProjectPills = document.createElement("div");
                    cardProjectPills.classList.add("card__project-pills");
                    a.labels.forEach((e) => {
                        let cardPill = document.createElement("span");
                        cardPill.textContent = e;
                        cardPill.classList.add("card__pill", "ellipsis");
                        cardProjectPills.appendChild(cardPill);
                    });
                    cardProject.appendChild(cardProjectPills);

                document.querySelector("#card__project-wrapper").appendChild(cardProject);
            });
        }
    
}