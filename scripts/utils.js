function add(x, y)
{
    return x + y;
}

function keepInGame(entity, stage)
{
    entity.positionX = Math.max(Math.min(entity.positionX, stage.width - 1), 0);
    entity.positionY = Math.max(Math.min(entity.positionY, stage.height - 1), 0);
}