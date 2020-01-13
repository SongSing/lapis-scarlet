function update(context)
{
    const { entity, stage } = context;

    if (!entity.store.hasOwnProperty("index"))
    {
        const newY = entity.positionY + (entity.age / 50);
        entity.positionY = newY;
        entity.alive = newY < (stage.height + 32);
    }
    else
    {
        const angle = Math.PI * 2 * (entity.store.index / 8);
        entity.positionX = entity.positionX + Math.cos(angle) * 5;
        entity.positionY = entity.positionY + Math.sin(angle) * 5;
        entity.alive = entity.age < 500;
    }
}