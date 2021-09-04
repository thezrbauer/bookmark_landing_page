
//Cycle Tabs + cycle redbar

function displayTabs(elementId) {
    let tabsId = elementId + "Card";
    let tabsTags = document.getElementsByClassName(document.getElementById(elementId).classList[0]);
    let tabs = document.getElementsByClassName('tab');
    let cardsTag = document.getElementsByClassName('cardsTag');
    for (i = 0; i < tabs.length; i++) {
        if (tabs[i].id == tabsId && tabsTags[i].id == elementId) {
            tabsTags[i].style.borderBottom = ' solid red 4px';
            tabs[i].style.display = 'flex';
            cardsTag[i].style.color = "black";
        }
        else {
            tabs[i].style.display = 'none';
            tabsTags[i].style.borderBottom = ' solid #9194A1 2px';
            cardsTag[i].style.color = " 	#6d6e74";
        }
    }
}



//Default Behavior for answers

function resetDefault(dropdown, answer) {
    dropdown.lastChild.style.filter = 'hue-rotate(0deg)';
    dropdown.lastChild.style.transform = 'scaleY(1)';
    answer.lastElementChild.style.display = 'none';
}

//transformed answers

function changeProperty(dropdown, answer) {
    dropdown.lastChild.style.filter = 'hue-rotate(90deg)';
    dropdown.lastChild.style.transform = 'scaleY(-1)';
    answer.lastElementChild.style.display = 'block';
}

//Dropdown button handler

function displayAns(element) {
    let questions = document.getElementsByClassName('answers');
    for (i = 0; i < questions.length; i++) {

        let dropdown = questions[i].lastElementChild.previousElementSibling;

        if (questions[i].id == element.id) {

            if (questions[i].lastElementChild.style.display == 'block') {
                resetDefault(dropdown, questions[i]);
            }
            else {
                changeProperty(dropdown, questions[i]);
            }
        }

        else {
            if (questions[i].lastElementChild.style.display == 'block') {
                resetDefault(dropdown, questions[i]);
            }
        }
    }
}


//Email Validation


const regex = /^([\_\-\%a-zA-Z0-9\.]+)\@([a-zA-Z0-9]+)\.([a-zA-Z]){3,10}$/;
const contactBtn = document.getElementById('contact');
const emailId = document.getElementById('emailId');
contactBtn.addEventListener('click', validate);
emailId.addEventListener('blur', validate);


function validate() {
    if (!regex.test(emailId.value)) {
        document.getElementById('errorImg').style.display = 'inline-block';
        document.getElementById('errorText').style.display = 'block';
        emailId.style.boxShadow = '0px 25px #FB5B5B';
        emailId.style.border = '3px solid #FB5B5B';
    }
    else {
        document.getElementById('errorImg').style.display = 'none';
        document.getElementById('errorText').style.display = 'none';
        emailId.style.boxShadow = 'none';
        emailId.style.border = 'none';
    }
};


//Hamburger Button handler

function menuFunction(x) {
    let socialIcons = "";
    x.classList.toggle('change');
    let header = document.querySelector('header');
    header.classList.toggle('show');
    // header.lastElementChild.style.height = 'calc()'
    let height = header.lastElementChild.offsetHeight;
    let screenHeight = window.innerHeight;
    let marginTop = screenHeight - height;
    marginTop = marginTop.toString();
    header.lastElementChild.lastElementChild.style.marginTop = marginTop;
}
