function update(context)
{
    let { entity, stage } = context;
    
    return {
        position: {
            x: entity.spawnPosition.x + 200 * entity.index,
            y: entity.age * 100
        },
        alive: true,
        fire: false
    };
}