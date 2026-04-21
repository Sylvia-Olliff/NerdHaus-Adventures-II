const ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries');
const MobCategory = Java.loadClass('net.minecraft.world.entity.MobCategory');

function genMobData(ctx) {
    const mobBiomeMap = {};

    ForgeRegistries.ENTITY_TYPES.getValues().forEach(entityType => {
        const id = String(ForgeRegistries.ENTITY_TYPES.getKey(entityType));
        mobBiomeMap[id] = [];
    });

    ForgeRegistries.BIOMES.getValues().forEach(biome => {
        const biomeId = String(ForgeRegistries.BIOMES.getKey(biome));
        const mobSettings = biome.getMobSettings();

        Java.from(MobCategory.values()).forEach(category => {
            const spawns = mobSettings.getMobs(category);

            spawns.forEach(spawnerData => {
                const entityType = spawnerData.type;
                const id = String(ForgeRegistries.ENTITY_TYPES.getKey(entityType));

                if (!mobBiomeMap[id].includes(biomeId)) {
                    mobBiomeMap[id].push(biomeId);
                }
            });
        });
    });

    JsonIO.write('kubejs/data/nerdhaus/mobData.json', mobBiomeMap);
    return 1;
}


ServerEvents.commandRegistry(event => {
    const { commands: Commands, args: Arguments } = event;
    event.register(
        Commands.literal('genMobData')
            .requires(src => src.hasPermissionLevel(2))
            .executes(ctx => {
                return genMobData(ctx);
            }));
});
