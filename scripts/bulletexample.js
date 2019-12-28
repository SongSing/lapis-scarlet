function update(context)
{
    const { entity, stage, keys } = context;
    
    const sep = keys.focus ? 4 : 10;
    
    let angle = 0;
    angle -= (entity.store.total - 1) / 2 * sep;
    angle += (entity.store.index) * sep;
    
    angle = (angle - 90) / 180 * Math.PI;

    const distance = 30;
    
    return {
        position: {
            x: entity.position.x + Math.cos(angle) * distance,
            y: entity.position.y + Math.sin(angle) * distance
        },
        alive: entity.position.y > -32
    };
}