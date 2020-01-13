function init(context)
{
    let { entity, stage } = context;
    entity.positionX = entity.spawnPositionX + 200 * entity.index;
    entity.positionY = -64;
}

function update(context)
{
    let { entity, stage } = context;
    entity.positionY = entity.age;
}