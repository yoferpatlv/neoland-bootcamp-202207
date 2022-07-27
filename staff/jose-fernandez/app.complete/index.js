//hanburguesa transition
var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav-home');

btnMenu.addEventListener('click', function () {
    nav.classList.toggle('mostrar');
});
// ===================================================================


const loginPage = document.querySelector('.login_page')
const registerPage = document.querySelector('.register_page')
const homePage = document.querySelector('.home_page')

let _token
// ==========================================================


// ===================================================================

// loginPage.classList.add('off')
// homePage.classList.remove('off')

const registerLink = loginPage.querySelector('.link-register')

registerLink.onclick = function (event) {
    event.preventDefault()

    //Oculto la pagina del login agregandole off a la clase ".login_page"
    loginPage.classList.add('off')
    //Muestro la pagina del register removiendo off a la clase ".register_page"
    registerPage.classList.remove('off')
}

const loginLink = registerPage.querySelector('.link-login')

loginLink.onclick = function (event) {
    //cancela la accion predeterminada del evento
    event.preventDefault()

    //Oculto la pagina del register agregandole off a la clase ".login_page"
    registerPage.classList.add('off')
    //Muestro la pagina del login removiendo off a la clase ".register_page"
    loginPage.classList.remove('off')
}

const btn__pluss = homePage.querySelector('.btn_plus')
const list__Notes = homePage.querySelector('.list')
const loginForm = loginPage.querySelector('.form')

//para recoger los datos que ponemos en los inputs usamos .onsubmit
loginForm.onsubmit = function (event) {
    event.preventDefault()

    const email = loginForm.email.value
    const password = loginForm.password.value
    try {
        authenticateUser(email, password, function (error,token) {
            if (error) {
                alert(error.message)
                return
            }
            _token = token
            try {
                retrieveUser(_token, function (error, user) {
                    if (error) {
                        alert(error.message)
                        return
                    }
                    
                    loginPage.classList.add('off')

                    const messageTitle = homePage.querySelector(".messageTitle")

                    messageTitle.innerText = " Hello " + user.name + " !"
                    refreshList()
                    homePage.classList.remove('off')
                })
            } catch (error) {
                alert(error.message)
            }
        })
    } catch (error) {
        alert(error.message)
    }
}


const registerForm = registerPage.querySelector('.form')
registerForm.onsubmit = function (event) {
    event.preventDefault()

    const name = registerForm.name.value
    const email = registerForm.email.value
    const password = registerForm.password.value

    // try catch 
    try {
        registerUser(name, email, password, function (error) {
            if (error) {
                alert(error.message)
                return
            }
            registerPage.classList.add("off")
            loginPage.classList.remove("off")
        })

    } catch (error) {
        alert(error.message)
    }
}



const createNoteForm = homePage.querySelector('.formcreateNote')

createNoteForm.onsubmit = function (event) {
    //cancela la accion predeterminada del evento
    event.preventDefault()

    // creo una constante y lo igualo al texto de mi textarea con name="newItemNote" ubicado en createNoteForm 
    const textFromTextarea = createNoteForm.newItemNote.value
  
    if (textFromTextarea !== "") {
        try {
            createNote(_token, textFromTextarea, error => {

                if (error) {
                    alert(error.message)
                    return
                }
                refreshList()
            })
        } catch (error) {
            alert(error.message)
        }
    }else alert('Nota Vacia Descartada')

    createNoteForm.classList.add('off')
    list__Notes.classList.remove('off')
    btn__pluss.classList.remove('off')
    // poner el textarea de la newNote en Blanco
    document.getElementById("newNote").value = "";
}


btn__pluss.onclick = function () {
    //cancela la accion predeterminada del evento
    // event.preventDefault()
    list__Notes.classList.add('off')
    btn__pluss.classList.add('off')
    createNoteForm.classList.remove('off')

}

function refreshList() {
    try {
        retrieveNotes(_token, function (error, notes) {
            if (error) {
                alert(error.message)
                return
            }
            createNoteForm.classList.add('off')
            list__Notes.classList.remove('off')

            // headmainhome.classList.add('off')
            btn__pluss.classList.remove('off')

            const list = homePage.querySelector('.list')
            list.innerHTML = ""

            notes.forEach(note => {
                const item = document.createElement('li')
                item.classList.add('list__item')

                const deleteButton = document.createElement('button')
                deleteButton.classList.add('btn__delete')
                deleteButton.innerText = 'x'
                deleteButton.onclick = function () {
                    try {
                        deleteNote(_token, note.id, error => {
                            if (error) {
                                alert(error.message)
                                return
                            }
                            refreshList()
                        })
                    } catch (error) {
                        alert(error.message)
                    }
                }

                const text = document.createElement('textarea')
                text.classList.add('list__item-text')
                text.onkeyup = function () {
                    try {
                        updateNote(_token, note.id, text.innerText, error => {
                            if (error) {
                                alert(error.message)
                                return
                            }
                        })
                    } catch (error) {
                        alert(error.message)
                    }
                }
                text.innerText = note.text
                item.append(deleteButton, text)
                list.append(item)

            })
        })
    } catch (error) {
        alert(error.message)
    }
}


// const configGlobal=homePage.querySelector('.configGlobal')
// const navHome=homePage.querySelector(".nav-home")
// const formConfig=homePage.querySelector(".formConfig")
// const btnBack=homePage.querySelector(".btnBack")


// btnBack.onclick = function (event) {
//     event.preventDefault()
    

//     formConfig.classList.add('off')
//     list__Notes.classList.remove('off')
//     btn__pluss.classList.remove('off')
// }

// configGlobal.onclick = function (event) {
//     event.preventDefault()
//     list__Notes.classList.add('off')
//     navHome.classList.toggle('mostrar')
//     btn__pluss.classList.add('off')
//     createNoteForm.classList.add('off')
//     formConfig.classList.remove('off')
// }

// const textSmall=homePage.querySelector('.textSmall')
// const textNormal=homePage.querySelector('.textNormal')
// const textBig=homePage.querySelector('.textBig')



// textSmall.onsubmit=function(event){    
//     //cancela la accion predeterminada del evento
//     event.preventDefault()
//     document.querySelector('.newItem').style.fontSize=1+"rem"; 
//     document.querySelector('.list__item-text').style.fontSize=1+"rem";
    
//     // creo una constante y lo igualo al texto de mi textarea con name="newItemNote" ubicado en createNoteForm 
//     // const textFromTextarea = createNoteForm.newItemNote.value

//     formConfig.classList.add('off')
//     list__Notes.classList.remove('off')
//     btn__pluss.classList.remove('off')
// }
// textNormal.onsubmit=function(event){
//     event.preventDefault()
//     document.querySelector('.newItem').style.fontSize=1.5+"rem"; 
//     document.querySelector('.list__item-text').style.fontSize=1.5+"rem";
//     formConfig.classList.add('off')
//     list__Notes.classList.remove('off')
//     btn__pluss.classList.remove('off')
// }
// textBig.onsubmit=function(event){
//     event.preventDefault()

//     document.querySelector('.newItem').style.fontSize=2+"rem"; 
//     document.querySelector('.list__item-text').style.fontSize=2+"rem";
//     formConfig.classList.add('off')
//     list__Notes.classList.remove('off')
//     btn__pluss.classList.remove('off')
// }