

document.addEventListener('DOMContentLoaded', function(){

    let MainWp = document.getElementById('chax-wp')

    function RenderPlaz(){
        let PreDoskaWhite = document.createElement('div');
        let PreDoskaBlack = document.createElement('div');
        let DoskaMain = document.createElement('div');

        PreDoskaWhite.classList.add('PreDoskaWhite');
        PreDoskaBlack.classList.add('PreDoskaBlack');
        DoskaMain.classList.add('DoskaMain');


        MainWp.append(PreDoskaWhite)
        MainWp.append(PreDoskaBlack)
        MainWp.append(DoskaMain)

    }
})