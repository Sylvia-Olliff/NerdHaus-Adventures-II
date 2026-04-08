ServerEvents.recipes(evt => {
    const create = CreateRecipeGenerator(evt);

    /**
     * Crushing recipes for Deeper and Darker ores. Each ore has a chance to yield extra resources, with the probabilities increasing for higher-tier ores. 
     * The base output is 2 units of the corresponding resource, with chances for additional outputs based on the ore type.
     */
    create.crushing()
        .itemIn('deeperdarker:gloomslate_coal_ore')
        .itemOut('3x minecraft:coal')
        .id('nerdhaus:create/crushing/gloomslate_coal_ore');

    create.crushing()
        .itemIn('deeperdarker:gloomslate_iron_ore')
        .itemOut('2x minecraft:raw_iron')
        .itemOut('minecraft:raw_iron', 0.3)
        .itemOut('minecraft:raw_iron', 0.1)
        .id('nerdhaus:create/crushing/gloomslate_iron_ore');

    create.crushing()
        .itemIn('deeperdarker:gloomslate_gold_ore')
        .itemOut('2x minecraft:raw_gold')
        .itemOut('minecraft:raw_gold', 0.3)
        .itemOut('minecraft:raw_gold', 0.1)
        .id('nerdhaus:create/crushing/gloomslate_gold_ore');

    create.crushing()
        .itemIn('deeperdarker:gloomslate_copper_ore')
        .itemOut('2x minecraft:raw_copper')
        .itemOut('minecraft:raw_copper', 0.3)
        .itemOut('minecraft:raw_copper', 0.1)
        .id('nerdhaus:create/crushing/gloomslate_copper_ore');

    create.crushing()
        .itemIn('deeperdarker:gloomslate_redstone_ore')
        .itemOut('4x minecraft:redstone')
        .itemOut('minecraft:redstone', 0.3)
        .itemOut('minecraft:redstone', 0.1)
        .id('nerdhaus:create/crushing/gloomslate_redstone_ore');
    
    create.crushing()
        .itemIn('deeperdarker:gloomslate_lapis_ore')
        .itemOut('3x minecraft:lapis_lazuli')
        .itemOut('minecraft:lapis_lazuli', 0.3)
        .itemOut('minecraft:lapis_lazuli', 0.1)
        .id('nerdhaus:create/crushing/gloomslate_lapis_ore');
});