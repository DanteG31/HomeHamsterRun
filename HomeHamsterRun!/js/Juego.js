var Pausa = false;
var Musicplay = true;
$("#btn_Pausa").click(function () {
    Pausa = true;
    document.getElementById('background_pausa').style.display = 'block';
});

$("#btn_Volver").click(function () {
    Pausa = false;
    document.getElementById('background_pausa').style.display = 'none';
});

function play() {
 
    let audio = document.querySelector('#Audio');
    if(Musicplay ==false){
        document.getElementById('botonsilencio').style.display = 'block';
        document.getElementById('botonreproducir').style.display = 'none';
        audio.play();
        Musicplay = true;
    }else{
        document.getElementById('botonsilencio').style.display = 'none';
        document.getElementById('botonreproducir').style.display = 'block';
        audio.pause();
        Musicplay = false;
    }
}

function moveEnemy(enemy){
    var coll = false;
    if(enemy.mobile == true){
        if(enemy.mov < enemy.maxmov){
                enemy.translateZ(enemy.speed * deltaTime);
                enemy.mov += enemy.speed * deltaTime;
                enemy.box.setFromObject(enemy);
                for(j = 0; j < players.length; j++){
                    if(enemy.box.intersectsBox(players[j].box)){
                        players[j].hp-=enemy.dmg;
                        sound();
                        coll = true;
                        break;
                    }
                }
        }
        else{
                enemy.rotateY(THREE.Math.degToRad(180));
                enemy.mov = 0;

        }
    }
    else{
        for(j = 0; j < players.length; j++){
            if(enemy.box.intersectsBox(players[j].box)){
                players[j].hp-=enemy.dmg;
                sound();
                coll = true;
                break;
            }
        }
    }
    return coll;
}

function updateHP(player, bar){
    if(player.hp>=0){
        document.getElementById(bar).style.width = player.hp.toString() + '%';
    }
    else{
        document.getElementById(bar).style.width = '0%';
    }
}

