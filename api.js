const idnum=document.getElementById('idnum');
const nme=document.getElementById('name');
const cmp=document.getElementById('cmp');
const adr=document.getElementById('adr');
const dta=document.getElementById('dta');
const api='https://jsonplaceholder.typicode.com/users';
const inpel=document.getElementById('srch');

const search=()=>{
    // let p=Number(srch.value);
    let p=srch.value;
    fetch(`${api}/${p}`)
    .then(res=>res.json())
    .then(json=>{
        idnum.innerText=json.id;
        nme.innerText=json.name;
        cmp.innerText=json.company.name;
        adr.innerText=json.address.city;
        dta.innerText=json.email;
    })
}

const rand=()=>{
    let m=(Math.floor(Math.random()*10))+1;
    // console.log(m);
    // console.log(`${api}/${m}`);
    fetch(`${api}/${m}`)
    .then(res=>res.json())
    .then(json=>{
        // console.log(json);
        idnum.innerText=json.id;
        nme.innerText=json.name;
        cmp.innerText=json.company.name;
        adr.innerText=json.address.city;
        dta.innerText=json.email;
    })
}