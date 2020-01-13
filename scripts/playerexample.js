// import script_utils as utils

function init(context)
{
    context.entity.store = {
        bulletCounter: 0,
        power: 3,
        leftPressed: false,
        rightPressed: false,
        lastLeft: 0,
        lastRight: 0
    };
}

function tryWarp(context)
{
    let { entity, stage, keys, helpers } = context;
    const store = entity.store;
    const cooldown = 45;

    const now = stage.age;
    if (keys.left && entity.positionX === 0 && !store.leftPressed)
    {
        if (now - store.lastLeft < cooldown)
        {
            entity.positionX = stage.width - 1;
        }

        store.lastLeft = now;
    }
    else if (keys.right && entity.positionX === stage.width - 1 && !store.rightPressed)
    {
        if (now - store.lastRight < cooldown)
        {
            entity.positionX = 0;
        }

        store.lastRight = now;
    }

    store.leftPressed = keys.left;
    store.rightPressed = keys.right;

    return store;
}

function update(context)
{    
    let { entity, stage, keys, helpers } = context;
    const store = entity.store;

    const fanLevel = entity.store.power;
    const toShoot = 1 + 2 * fanLevel;

    store.bulletCounter++;

    const bulletGoal = 5;

    if (keys.fire && store.bulletCounter >= bulletGoal)
    {
        store.bulletCounter = 0;
        for (let i = 0; i < toShoot; i++)
        {
            helpers.fireBullet("bullet_lapi", true, entity.positionX, entity.positionY, {
                index: i,
                total: toShoot
            });
            helpers.playSound("sound_shot");
        }
    }

    if (store.bulletCounter === 100)
    {
        store.bulletCounter = bulletGoal;
    }

    utils.keepInGame(entity, stage);

    tryWarp(context);
}

function draw(context)
{
    let { entity, stage, keys, helpers } = context;
}