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



    function saveProject(title1, desc1, label1, type1){
        projects.unshift({title: title1, description: desc1, labels: label1, type: type1});
    }
    
        // POR DEFECTO
        let typeProject = '';
        filterList(typeProject);
    
        // ALL BUTTON
        let allButton = document.querySelector('#allButton');
        allButton.addEventListener('click', ()=>{
            typeProject = '';
            filterList(typeProject);
        });
        
    
        // PROCESS BUTTON
        let processButton = document.querySelector('#processButton');
        processButton.addEventListener('click', ()=>{
            typeProject = 'enCurso';
            filterList(typeProject);
        });

    
        // REL BUTTON
        let relButton = document.querySelector('#relButton');
        relButton.addEventListener('click', ()=>{
            typeProject = 'relacionados';
            filterList(typeProject);
        });
    
    
        // CLOSED BUTTON
        let closedButton = document.querySelector('#closedButton');
        closedButton.addEventListener('click', ()=>{
            typeProject = 'cerrados';
            filterList(typeProject);
        });


        let projectDetailButton = document.querySelector('#projectDetailButton');
        let projectDetailForm = document.querySelector('#projectDetailForm');
        let projectDetailClose = document.querySelector('#projectDetailClose');
        let projectDetailSave = document.querySelector('#projectDetailSave');


        let projectTitle = document.querySelector('#projectTitle');
        let projectDescription = document.querySelector('#projectDescription');
        let projectLabels = document.querySelector('#projectLabels');
        let projectCategory = document.querySelector('#projectCategory');


        
        function filterList(typeProject){

            let allList = document.querySelector('#allList');
            let processList = document.querySelector('#processList');
            let relList = document.querySelector('#relList');
            let closedList = document.querySelector('#closedList');

            if(typeProject === 'enCurso'){
                processList.classList.add('card__tab-menu--active');

                allList.classList.remove('card__tab-menu--active');

                relList.classList.remove('card__tab-menu--active');

                closedList.classList.remove('card__tab-menu--active');
            }
            else if(typeProject === 'relacionados'){
                relList.classList.add('card__tab-menu--active');

                allList.classList.remove('card__tab-menu--active');

                processList.classList.remove('card__tab-menu--active');

                closedList.classList.remove('card__tab-menu--active');
            }
            else if(typeProject === 'cerrados'){
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

    
    
            document.querySelector('#card__project-wrapper').innerHTML= '';
            let projectProcess;
            if(typeProject !== ''){
                projectProcess = projects.filter((projects) =>{
                    return projects.type === typeProject;
                });
            }
            else{
                projectProcess = projects;
            } 
            
            let i = 1;

            projectProcess.forEach((a) => {


                let cardProject = document.createElement('div');
                cardProject.classList.add('card__project');
                cardProject.setAttribute('id', 'cardProject'+ i);


                // VISUALIZAR
                cardProject.addEventListener('click', (e)=>{
                    e.preventDefault();

                    projectDetailSave.disabled = true;
                    projectDetailSave.style.backgroundColor = "#d8d8d8";
                    projectDetailSave.style.cursor = "auto";

                    projectDetailForm.style.display = 'flex';
                    projectDetailButton.style.display = 'none';

                    projectTitle.value = a.title;
                    projectDescription.value = a.description;
                    projectLabels.value = a.labels;
                    projectCategory.value = a.type;
                });

                    // BUTTONS EDIT & DELETE
                    let projectEdit = document.createElement('a');
                    projectEdit.textContent = 'Editar';
                    projectEdit.setAttribute('href', '#');
                    projectEdit.classList.add('card__project-modify-link', 'card__project-modify-link--edit');
                    projectEdit.setAttribute('id', 'projecEdit');
                    cardProject.appendChild(projectEdit);

                    // EDITAR
                    projectEdit.addEventListener('click', (e)=>{
                        e.preventDefault();
                        e.stopPropagation();
                        projectDetailSave.disabled = false;

                        projectDetailForm.style.display = 'flex';
                        projectDetailButton.style.display = 'none';

                        projectTitle.value = a.title;
                        projectDescription.value = a.description;
                        projectLabels.value = a.labels;
                        projectCategory.value = a.type;

                        projectDetailSave.setAttribute("indice", projects.indexOf(a));
                        
                    });

                    let projectDelete = document.createElement('a');
                    projectDelete.textContent = 'Eliminar';
                    projectDelete.setAttribute('href', '#');
                    projectDelete.classList.add('card__project-modify-link', 'card__project-modify-link--delete');
                    projectDelete.setAttribute('id', 'projectDelete');
                    cardProject.appendChild(projectDelete);

                    // BORRAR
                    projectDelete.addEventListener('click', (e)=>{
                        e.preventDefault();
                        e.stopPropagation();
                        let index = projects.indexOf(a);
                        alert('Borrar el proyecto: ' + a.title + ', que ocupa la posición: ' + index);
                        projects.splice(index, 1);
                        filterList(typeProject);
                    });

                    // CARD__LINK
                    let cardLink = document.createElement('a');
                    cardLink.textContent = a.title;
                    cardLink.setAttribute('href', '#');
                    cardLink.classList.add('card__link');
                    cardProject.appendChild(cardLink);

                    // CARD__PARAGRAPH
                    let cardParagraph = document.createElement('span');
                    cardParagraph.textContent = a.description
                    cardParagraph.classList.add('card__paragraph');
                    cardProject.appendChild(cardParagraph);

                    // CARD__PILLS
                    let cardProjectPills = document.createElement('div');
                    cardProjectPills.classList.add('card__project-pills');
                    a.labels.forEach((e) => {
                        let cardPill = document.createElement('span');
                        cardPill.textContent = e;
                        cardPill.classList.add('card__pill', 'ellipsis');
                        cardProjectPills.appendChild(cardPill);
                    });
                    cardProject.appendChild(cardProjectPills);

                document.querySelector('#card__project-wrapper').appendChild(cardProject);

                i++;
            });
        }


        projectDetailButton.addEventListener('click', ()=>{
            projectDetailForm.style.display = 'flex';
            projectDetailButton.style.display = 'none';
        });

        projectDetailClose.addEventListener('click', (e)=>{
            e.preventDefault();
            projectDetailForm.style.display = 'none';
            projectDetailButton.style.display = 'flex';

            projectTitle.value = '';
            projectDescription.value = '';
            projectLabels.value = '';
            projectCategory.value = 'enCurso';

            projectDetailSave.disabled = false;
            projectDetailSave.style.cursor = 'pointer';
            projectDetailSave.style.backgroundColor = '#7F950B';

            projectDetailSave.removeAttribute('indice');

        });

        projectDetailSave.addEventListener('click', (e)=>{
            e.preventDefault();

            let title = projectTitle.value; 
            let desc = projectDescription.value; 
            let arrayLabels = projectLabels.value.split(",");
            let type = projectCategory.value;


            if(projectTitle.value === '' || projectDescription.value === '' || projectLabels.value === '' || projectCategory.value === ''){
                alert('Todos los campos deben estar rellenos');
            }
            else{
                if(projectDetailSave.hasAttribute('indice')){
                    let indice = projectDetailSave.getAttribute("indice");
                    function editProject(){
                        projects[indice].title = title;
                        projects[indice].description = desc;
                        projects[indice].labels = arrayLabels;
                        projects[indice].type = type;
                    }

                    editProject();
                    filterList(typeProject);
                }
                else{
                    saveProject(title, desc, arrayLabels, type);
                    filterList(typeProject);
                }
                
            }

        });

}