function submit() {
    let source = {
        name : document.querySelector("#InputName"),
        role : document.querySelector("#InputRole"),
        avail : document.querySelector("#InputAvail"),
        age : document.querySelector("#InputAge"),
        loc : document.querySelector("#InputLoc"),
        exp : document.querySelector("#InputExp"),
        email : document.querySelector("#InputEmail")
    };

    let target = {
        name : document.querySelector("#HolderName"),
        role : document.querySelector("#HolderRole"),
        avail : document.querySelector("#HolderAvail"),
        age : document.querySelector("#HolderAge"),
        loc : document.querySelector("#HolderLoc"),
        exp : document.querySelector("#HolderExp"),
        email : document.querySelector("#HolderEmail")
    };

    let form_el = document.querySelector("#theForm");

    target.name.innerText = source.name.value;
    target.role.innerText = source.role.value;
    target.avail.innerText = source.avail.value;
    target.age.innerText = source.age.value;
    target.loc.innerText = source.loc.value;
    target.exp.innerText = source.exp.value;
    target.email.innerText = source.email.value;

    form_el.style.display = "none";
  }
  
  function show_form() {
    let form_el = document.querySelector("#theForm");  
    form_el.style.display = "block";
  }

