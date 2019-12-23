function update(context)
{
    const { entity, stage } = context;

    if (!entity.store.hasOwnProperty("index"))
    {
        const newY = entity.position.y + 500 / 60;
    
        return {
            position: {
                x: entity.position.x,
                y: newY
            },
            alive: newY < (stage.size.y + 32)
        };
    }
    else
    {
        const angle = Math.PI * 2 * (entity.store.index / 8);
        return {
            position: {
                x: entity.position.x + Math.cos(angle) * 5,
                y: entity.position.y + Math.sin(angle) * 5
            },
            alive: entity.age < 500
        };
    }
}