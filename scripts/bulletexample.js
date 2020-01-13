function init(context)
{
    context.entity.opacity = 0.5;
}

function update(context)
{
    const { entity, stage, keys } = context;
    
    const sep = keys.focus ? 4 : 10;
    
    let angle = 0;
    angle -= (entity.store.total - 1) / 2 * sep;
    angle += (entity.store.index) * sep;
    
    angle = (angle - 90) / 180 * Math.PI;

    const distance = 30;
    entity.positionX += Math.cos(angle) * distance;
    entity.positionY += Math.sin(angle) * distance;
    entity.alive = entity.positionY > -32;
}