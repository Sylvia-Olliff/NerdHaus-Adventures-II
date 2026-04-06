ServerEvents.recipes(evt => {
    const create = CreateRecipeGenerator(evt);

    create.crushing()
        .itemIn('deeperdarker:gloomslate_coal_ore')
        .itemOut('minecraft:coal')
        .itemOut('minecraft:coal')
        .itemOut('minecraft:coal')
        .id('nerdhaus:create/crushing/gloomslate_coal_ore');

    create.crushing()
        .itemIn('deeperdarker:gloomslate_iron_ore')
        .itemOut('minecraft:raw_iron')
        .itemOut('minecraft:raw_iron')
        .itemOut('minecraft:raw_iron', 0.3)
        .itemOut('minecraft:raw_iron', 0.1)
        .id('nerdhaus:create/crushing/gloomslate_iron_ore');
});