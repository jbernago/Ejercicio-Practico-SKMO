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
    let allButton = document.getElementById('allButton');
    allButton.addEventListener('click', ()=>filterList(""));
    

    // PROCESS BUTTON
    let processButton = document.getElementById('processButton');
    processButton.addEventListener('click', ()=>filterList("enCurso"));


    // REL BUTTON
    let relButton = document.getElementById('relButton');
    relButton.addEventListener('click', ()=>filterList("relacionados"));


    // CLOSED BUTTON
    let closedButton = document.getElementById('closedButton');
    closedButton.addEventListener('click', ()=>filterList("cerrados"));


    function filterList(typeProject){


        document.getElementById("card__project-wrapper").innerHTML= "";

        if(typeProject != ""){
            let projectProcess = projects.filter((projects) =>{
                return projects.type === typeProject;
            });

            projectProcess.forEach((a) => {

                let card__project = document.createElement("div");
                card__project.setAttribute("class", "card__project");

                    // CARD__LINK
                    let card__link = document.createElement("a");
                    let linkText =  document.createTextNode(a.title);
                    card__link.appendChild(linkText);
                    card__link.setAttribute("href", "#");
                    card__link.setAttribute("class", "card__link");
                    card__project.appendChild(card__link);

                    // CARD__PARAGRAPH
                    let card__paragraph = document.createElement("span");
                    let spanText =  document.createTextNode(a.description);
                    card__paragraph.appendChild(spanText);
                    card__paragraph.setAttribute("class", "card__paragraph");
                    card__project.appendChild(card__paragraph);

                    // CARD__PILLS
                    let card__projectPills = document.createElement("div");
                    card__projectPills.setAttribute("class", "card__project-pills");
                    a.labels.forEach((e) => {
                        let card__pill = document.createElement("p");
                        let pillText =  document.createTextNode(e);
                        card__pill.appendChild(pillText);
                        card__pill.setAttribute("class", "card__pill ellipsis");

                        card__projectPills.appendChild(card__pill);
                    });
                    card__project.appendChild(card__projectPills);

                document.getElementById("card__project-wrapper").appendChild(card__project);
            });
        }
        else{
            projects.forEach((a) => {

            let card__project = document.createElement("div");
            card__project.setAttribute("class", "card__project");
    
                // CARD__LINK
                let card__link = document.createElement("a");
                let linkText =  document.createTextNode(a.title);
                card__link.appendChild(linkText);
                card__link.setAttribute("href", "#");
                card__link.setAttribute("class", "card__link");
                card__project.appendChild(card__link);
    
                // CARD__PARAGRAPH
                let card__paragraph = document.createElement("span");
                let spanText =  document.createTextNode(a.description);
                card__paragraph.appendChild(spanText);
                card__paragraph.setAttribute("class", "card__paragraph");
                card__project.appendChild(card__paragraph);
    
                // CARD__PILLS
                let card__projectPills = document.createElement("div");
                card__projectPills.setAttribute("class", "card__project-pills");
                a.labels.forEach((e) => {
                    let card__pill = document.createElement("p");
                    let pillText =  document.createTextNode(e);
                    card__pill.appendChild(pillText);
                    card__pill.setAttribute("class", "card__pill ellipsis");
    
                    card__projectPills.appendChild(card__pill);
                });
                card__project.appendChild(card__projectPills);
    
    
                document.getElementById("card__project-wrapper").appendChild(card__project);
            });
        }


    }


