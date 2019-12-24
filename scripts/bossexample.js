function init(context)
{
    let { entity, stage } = context;
    
    return {
        position: {
            x: entity.spawnPosition.x + 200 * entity.index,
            y: entity.age * 1
        },
        alive: true,
        fire: false
    };
}

function update(context)
{
    let { entity, stage } = context;
    
    return {
        position: {
            x: entity.spawnPosition.x + 200 * entity.index,
            y: entity.age * 1
        },
        alive: true,
        fire: false
    };
}