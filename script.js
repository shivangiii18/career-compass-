function scrollToTracker() {

    let tracker =
    document.getElementById(
    "tracker"
    );

    tracker.scrollIntoView({
        behavior:"smooth"
    });

}

/* Add Internship */

function addInternship() {

    let company =
    document.getElementById(
    "company"
    ).value;

    let status =
    document.getElementById(
    "status"
    ).value;

    if(company===""){

        alert(
        "Please enter company name!"
        );

        return;
    }

    let internshipList =
    document.getElementById(
    "internshipList"
    );

    let card =
    document.createElement(
    "div"
    );

    card.classList.add(
    "glass"
    );

    card.style.marginTop =
    "20px";

    card.innerHTML = `

    <h3>${company}</h3>

    <p>
    Status:
    <strong>${status}</strong>
    </p>

    <button
    onclick="deleteCard(this)">

    Delete

    </button>

    `;

    internshipList.appendChild(
    card
    );

    updateAI(status);

    document.getElementById(
    "company"
    ).value = "";
}

/* Delete */

function deleteCard(button){

    button.parentElement.remove();

}

/* AI Update */

function updateAI(status){

    let aiText =
    document.getElementById(
    "aiText"
    );

    if(status==="Interview"){

        aiText.innerText =

        "🔥 Interview phase! Focus on DBMS, aptitude and HR questions.";

    }

    else if(
    status==="Rejected"
    ){

        aiText.innerText =

        "⚡ Rejection is normal. Improve resume and apply to more companies.";

    }

    else if(
    status==="Selected"
    ){

        aiText.innerText =

        "🎉 Congratulations! Start preparing technical skills for internship.";

    }

    else{

        aiText.innerText =

        "🚀 Keep applying and improve JavaScript this week.";

    }

}