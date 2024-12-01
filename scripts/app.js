

// DEEPWOKEN
let gunBtn = document.getElementById('gunBtn');
let galeBtn = document.getElementById('galeBtn');
let maestroBtn = document.getElementById('maestroBtn');
let randomBtn = document.getElementById('randomBtn');

let buildName = document.getElementById('buildName');
let buildDesc = document.getElementById('buildDesc');
let buildLink = document.getElementById('buildLink');




function getBuildData()
{
   return fetch('../data/data.json')
    .then( response => response.json())
    .then( data => {
        
        return data.deepwokenBuilds
    })
}


function getRandomBuild(deepwokenBuilds)
{
    let randomIndex = Math.floor(Math.random() * deepwokenBuilds.length );
    
    return deepwokenBuilds[randomIndex];
}



randomBtn.addEventListener('click', () => 
    {
        
        getBuildData()
        .then(deepwokenBuilds => {
            let randomBuild = getRandomBuild(deepwokenBuilds);
            
           
    
        buildName.innerText = randomBuild.buildName
        buildDesc.innerText = randomBuild.buildDesc
        buildLink.href = randomBuild.buildLink
    
    })
    })

    // DEEPWOKEN