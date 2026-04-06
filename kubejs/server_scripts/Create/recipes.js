ServerEvents.recipes(evt => {
    const create = CreateRecipeGenerator(evt);

    create.crushing()
        .itemIn('deeperdarker:gloomslate_coal_ore')
        .itemOut('minecraft:coal')
        .itemOut('minecraft:coal')
        .itemOut('minecraft:coal')
        .id('nerdhaus:create/crushing/gloomslate_coal_ore');
});