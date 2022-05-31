tags = [];
tag_list = [];
subject_list = [];
// carets = document.getElementsByClassName('caret');

// for (var i = 0; i < carets.length; i++) {
//     carets[i].addEventListener('click', function() {
//         this.classList.toggle('caret-down')
//         parent = this.parentElement;
//         parent.querySelector('.nested').classList.toggle('active')

//     })
// }


createParent = document.getElementById('createParent')
backend = document.getElementById('backend')

createParent.addEventListener('click', function() {
    parent_name = prompt('Enter Parent Name: ');
    if (parent_name !== null) {
        tags.push(parent_name);
        myFunction();
        backend.innerHTML += ` <li>
        <input type="text" value=${parent_name}>
        <button class='createChild'><i class="fa fa-sitemap" aria-hidden="true"></i></button>     
         </li>`
    }
   
})

backend.addEventListener('click', function(e) {
    // if (e.target.classList == 'closeIT') {
    //     createChildBTN = e.target;
    //     li = createChildBTN.parentElement;
    //     master_name = li.getElementsByTagName('input');
    //     console.log(master_name[0].value);
    //     tags = tags.filter(function(f) { return f !== master_name[0].value })
    //     myFunction();
    //     e.target.parentElement.remove();

    // }

    if (e.target.classList == 'createChild') {
        createChildBTN = e.target;
        li = createChildBTN.parentElement;
        master_name = li.getElementsByTagName('input');
        console.log(master_name[0].value);
        console.log(tags);
        tags = tags.filter(function(f) { return f !== master_name[0].value })
        var child_name = prompt('Enter Child Name: ');
        if (child_name !== null) {
            tags.push(child_name);
            var x = ` <li>
            <input type="text" value=${child_name}>
            <button class='createGrandChild'><i class="fa fa-sitemap" aria-hidden="true"></i></button>
            
            </li>`;
            myFunction();
            li.innerHTML += `<ul>${x}</ul>`;
        }    

    }

    if (e.target.classList == 'createGrandChild') {
        createChildBTN = e.target;
        li = createChildBTN.parentElement;
        master_name = li.getElementsByTagName('input');
        console.log(master_name[0].value);
        console.log(tags);
        tags = tags.filter(function(f) { return f !== master_name[0].value })
        var child_name = prompt('Enter Child Name: ');
        if (child_name !== null) {
            tags.push(child_name);
            var x = ` <li>
                <input type="text" value=${child_name}>
                <button class='createGreatGrandChild'><i class="fa fa-sitemap" aria-hidden="true"></i></button>
            
            </li>`;
            myFunction();
            li.innerHTML += `<ul>${x}</ul>`;
        }
       
    }

    if (e.target.classList == 'createGreatGrandChild') {
        createChildBTN = e.target;
        li = createChildBTN.parentElement;
        master_name = li.getElementsByTagName('input');
        console.log(master_name[0].value);
        console.log(tags);
        tags = tags.filter(function(f) { return f !== master_name[0].value })
        //count = prompt('Enter the Number of Row');
        var child_name = prompt('Enter Child Name: ');
        if (child_name !== null) {
            tags.push(child_name);
            var x = ` <li>
                <input type="text" value=${child_name}>
            </li>`;
            myFunction();
            li.innerHTML += `<ul>${x}</ul>`;


        }
        
    }
})


function myFunction() {
    refresh_list();
  }

const lstTask = document.querySelector('#task_list');
const tagsshow = document.querySelector('#tags');

const subjectlist = document.querySelector('#subjectlist');


function refresh_list(){
    lstTask.innerHTML = tags.map((arg) => {
        return `
        <input type="checkbox" class="tagbox">
        <label >${arg}</label><br>`
    }).join('');

 

    document.querySelectorAll('.tagbox').forEach(arg => {
        arg.addEventListener('click', (e) => {
            let cur_task = e.target.nextElementSibling.innerHTML;
            valid = true;

            if (tag_list !== null){
               for (let index = 0; index < tag_list.length; index++) {
                   if (tag_list[index] == cur_task) {
                        tag_list = tag_list.filter(function(f) { return f !== cur_task });
                        valid = false;
                        
                   }
                   
               }
            }
            if (valid == true) {
                tag_list.push(cur_task);
            }
        });
    });
}



function show_tags_list(){
    let str = '';
    for (let index = 0; index < tag_list.length; index++) {
        str += tag_list[index] + ' ';
        
    }
    
    tagsshow.innerHTML =  str;
    document.getElementById("descrip").value = '';
    if (subject_list !== null) {
        subject_list.unshift(document.getElementById("subject").value);
    } else {
        subject_list.push(document.getElementById("subject").value);
    }
    
    document.getElementById("subject").value = '';

    tag_list = [];
    
    subjectlist.innerHTML = subject_list.map((arg) => {
        return `
        <li>${arg}</li>`
    }).join('');

    var inputs = document.querySelectorAll('.tagbox');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].checked = false;
        }
   
}


function cancel(){
    document.getElementById("subject").value = '';
    document.getElementById("descrip").value = '';
    var inputs = document.querySelectorAll('.tagbox');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
    }
}
