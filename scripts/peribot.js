function init(context)
{
    let { entity, stage } = context;
    let xSpawn = entity.spawnPositionX + entity.index * 100;
    entity.positionX = xSpawn;

    entity.store = {
        bulletCounter: 0
    };
}

function update(context)
{
    let { entity, stage, helpers } = context;
    const store = entity.store;
    entity.positionY = Math.min(100, entity.positionY + 3);

    store.bulletCounter++;

    if (store.bulletCounter === 40)
    {
        for (let i = 0; i < 3; i++)
        {
            const bullet = helpers.fireBullet("bullet_enemy_peri", false, entity.positionX, entity.positionY, {
                index: i + 1
            });
            bullet.tint = 0xFFFF55;
        }

        helpers.playSound("sound_enemy_shot");

        store.bulletCounter = 0;
    }
}