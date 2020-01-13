function init(context)
{
    context.enemy.store = {
        bulletCounter: 0
    };
}

function die(context)
{
    let { entity, stage, helpers } = context;

    if (entity.hp === 0)
    {
        for (let i = 0; i < 8; i++)
        {
            helpers.fireBullet("bullet_peri", false, entity.positionX, entity.positionY, {
                index: i
            });
        }
    }
}

function update(context)
{    
    let { entity, stage, helpers } = context;
    const enemy = entity;
    let age = enemy.age / 60;

    let mult = 4;
    let posX, posY;
    age -= 1 / mult;
    let cutoff1 = (5 - 1) / mult;
    let cutoff2 = (9 - 1) / mult;

    if (age < cutoff1)
    {
        posX = enemy.spawnPositionX + age * 100 * mult;
        posY = enemy.spawnPositionY;
    }
    else if (age < cutoff2)
    {
        const r = 50;
        const fraction = ((cutoff2) - age) / ((cutoff2) - cutoff1);
        const angle = (-Math.PI / 2) - (fraction * Math.PI * 2);
        let cx = Math.cos(angle) * r;
        let cy = Math.sin(angle) * r;

        posX = enemy.spawnPositionX + 100 * cutoff1 * mult + cx;
        posY = enemy.spawnPositionY + r + cy;
    }
    else
    {
        const a = age - cutoff2;
        posX = enemy.spawnPositionX + cutoff1 * 100 * mult + a * 100 * mult;
        posY = enemy.spawnPositionY;
    }

    let bulletCounter = entity.store.bulletCounter;
    bulletCounter++;

    if (bulletCounter === 10)
    {
        bulletCounter = 0;
        helpers.fireBullet("bullet_peri", false, posX, posY);
    }
    
    enemy.alive = posX < stage.sizeX;
    enemy.positionX = posX;
    enemy.positionY = posY;
    enemy.store.bulletCounter = bulletCounter;
}