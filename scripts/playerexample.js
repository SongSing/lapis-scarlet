// import script_utils as utils

function init(context)
{
    return {
        store: {
            bulletCounter: 0,
            power: 3
        }
    };
}

function update(context)
{    
    let { entity, stage, keys } = context;

    const fanLevel = entity.store.power;
    const toShoot = 1 + 2 * fanLevel;

    let fire = false;
    let bulletCounter = entity.store.bulletCounter;

    bulletCounter++;

    const bulletGoal = 5;

    if (keys.fire && bulletCounter >= bulletGoal)
    {
        bulletCounter = 0;
        fire = true;
    }

    if (bulletCounter === 100)
    {
        bulletCounter = bulletGoal;
    }

    const stores = [];
    for (let i = 0; i < toShoot; i++)
    {
        stores[i] = {
            index: i,
            total: toShoot
        };
    }

    return {
        fire: fire ? toShoot : 0,
        fireStores: stores,
        alive: true,
        store: {
            bulletCounter: bulletCounter,
            power: 3
        }
    };
}