console.log('Flappy');

const sprites = new Image();
sprites.src = './resources/sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext("2d");

// [FUNDO]
const bckgr = {
    spriteX: 390,
    spriteY: 0,
    largura: 270,
    altura: 204,
    x: 0,
    y: canvas.height - 100,
    desenha () {
        contexto.fillStyle = '#70c5ce';
        contexto.fillRect(0,0, canvas.width, canvas.height)

        contexto.drawImage(
        sprites,
        bckgr.spriteX, bckgr.spriteY,
        bckgr.largura, bckgr.altura,
        bckgr.x, bckgr.y,
        bckgr.largura, bckgr.altura,
        );

        contexto.drawImage(
        sprites,
        bckgr.spriteX, bckgr.spriteY,
        bckgr.largura, bckgr.altura,
        (bckgr.x + bckgr.largura), bckgr.y,
        bckgr.largura, bckgr.altura,
        );
    },
};

// [CHAO]
const floor = {
    spriteX: 0,
    spriteY: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 20,
    desenha() {
        contexto.drawImage(
            sprites,
            floor.spriteX, floor.spriteY,
            floor.largura, floor.altura,
            floor.x, floor.y,
            floor.largura, floor.altura,
        );

        contexto.drawImage(
            sprites,
            floor.spriteX, floor.spriteY,
            floor.largura, floor.altura,
            (floor.x + floor.largura), floor.y,
            floor.largura, floor.altura,
        );
    },
};

const bird = {
    spriteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 0,
    desenha() {
        contexto.drawImage(
            sprites,
            bird.spriteX, bird.spriteY,
            bird.largura, bird.altura,
            bird.x, bird.y,
            bird.largura, bird.altura,
        );
    },
};

function loop() {
    bckgr.desenha();
    bird.desenha();
    floor.desenha();    

    requestAnimationFrame(loop);
}

loop(); 