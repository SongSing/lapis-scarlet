function init(context)
{
    return {
        store: {
            bulletCounter: 0
        }
    };
}

function die(context)
{
    let { entity, stage } = context;

    let stores = [];
    for (let i = 0; i < 8; i++)
    {
        stores.push({
            index: i
        });
    }

    return {
        fire: 8,
        fireStores: stores
    };
}

function update(context)
{    
    let { entity, stage } = context;
    const enemy = entity;
    let age = enemy.age / 60;

    let mult = 4;
    let pos;
    age -= 1 / mult;
    let cutoff1 = (5 - 1) / mult;
    let cutoff2 = (9 - 1) / mult;

    if (age < cutoff1)
    {
        pos = {
            x: enemy.spawnPosition.x + age * 100 * mult,
            y: enemy.spawnPosition.y
        };
    }
    else if (age < cutoff2)
    {
        const r = 50;
        const fraction = ((cutoff2) - age) / ((cutoff2) - cutoff1);
        const angle = (-Math.PI / 2) - (fraction * Math.PI * 2);
        let cx = Math.cos(angle) * r;
        let cy = Math.sin(angle) * r;

        pos = {
            x: enemy.spawnPosition.x + 100 * cutoff1 * mult + cx,
            y: enemy.spawnPosition.y + r + cy
        };
    }
    else
    {
        const a = age - cutoff2;
        pos = {
            x: enemy.spawnPosition.x + cutoff1 * 100 * mult + a * 100 * mult,
            y: enemy.spawnPosition.y
        };
    }

    let fire = false;
    let bulletCounter = entity.store.bulletCounter;
    bulletCounter++;

    if (bulletCounter === 5)
    {
        bulletCounter = 0;
        fire = true;
    }

    return {
        position: pos,
        fire: fire,
        alive: pos.x < stage.size.x,
        store: {
            bulletCounter: bulletCounter
        }
    };
}